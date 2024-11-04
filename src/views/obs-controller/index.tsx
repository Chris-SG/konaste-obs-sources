import { useEffect, useState } from "react";

import OBSWebSocket, {
  OBSRequestTypes,
  OBSWebSocketError,
} from "obs-websocket-js";

import { SceneTransition } from "../config";
import {
  getNowPlayingSong,
  openKonasteWebsocket,
} from "../../clients/KonasteApiClient.ts";

const formatChapterText = async (chapterFormat: string): Promise<string> => {
  const nowPlaying = await getNowPlayingSong();
  if (!nowPlaying) {
    return "";
  }
  return chapterFormat
    .replace("{{NAME}}", nowPlaying.title)
    .replace("{{ARTIST}}", nowPlaying.artist);
};

const ObsController = () => {
  const obsIp = localStorage.getItem("obs-ip") || "localhost",
    obsPort = localStorage.getItem("obs-port") || "4455",
    obsPassword = localStorage.getItem("obs-password") || undefined,
    chapterFormat = localStorage.getItem("chapter-format") || "",
    sceneTransitions: Array<SceneTransition> = JSON.parse(
      localStorage.getItem("obs-scene-transitions") || "[]",
    ),
    [errors, setErrors] = useState<Array<string>>(Array.of()),
    [obsIsConnected, setObsIsConnected] = useState(false),
    [obsIsConnecting, setObsIsConnecting] = useState(false),
    [currentUI, setCurrentUI] = useState(""),
    [obs] = useState(new OBSWebSocket()),
    [konasteApi, setKonasteApi] = useState<WebSocket>(),
    [retryConnectionIn, setRetryConnectionIn] = useState(3000),
    messageEventListener = async (event: MessageEvent<string>) => {
      console.log(event.data);
      if (event.data === currentUI) {
        return;
      }
      if (!obsIsConnected) {
        return;
      }
      const transition = sceneTransitions.find((t) => t.UIEvent === event.data);
      if (transition !== undefined && transition.UIEvent !== currentUI) {
        console.log(
          `UI changed from ${currentUI} to ${transition.UIEvent} - changing scene to ${transition.SceneName}`,
        );
        const request: OBSRequestTypes["SetCurrentProgramScene"] = {
          sceneName: transition.SceneName,
        };
        await obs.call("SetCurrentProgramScene", request);
        if (transition.UIEvent === "UI_SONG_PLAY") {
          const formattedChapterFormat = await formatChapterText(chapterFormat);
          if (formattedChapterFormat !== "") {
            await obs.call("CreateRecordChapter", {
              chapterName: formattedChapterFormat,
            });
          }
        }
        setCurrentUI(event.data);
      }
    },
    openObsConnection = async () => {
      if (obsIsConnecting || obsIsConnected) return;
      setObsIsConnecting(true);
      try {
        console.log("Opening OBS WebSocket");
        await obs.connect(`ws://${obsIp}:${obsPort}`, obsPassword);
        setObsIsConnected(true);
        setObsIsConnecting(false);
      } catch (e) {
        setRetryConnectionIn(3000);
        setErrors(
          errors.concat(`Failed to open OBS WebSocket: ${JSON.stringify(e)}`),
        );
        setObsIsConnecting(false);
      }
    };

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    openKonasteWebsocket().then(setKonasteApi);
    openObsConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (konasteApi === undefined) return;
    konasteApi.addEventListener("message", messageEventListener);
    return () =>
      konasteApi.removeEventListener("message", messageEventListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obsIsConnected, konasteApi, currentUI]);

  if (konasteApi === undefined || obsIsConnecting || !obsIsConnected) {
    return <></>;
  }

  obs.on("ConnectionClosed", async (reason: OBSWebSocketError) => {
    setErrors(errors.concat(`OBS connection closed: ${reason.code}`));
    setTimeout(async () => {
      await openObsConnection();
    }, retryConnectionIn);
  });

  return (
    <>
      {errors.slice(-10).map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </>
  );
};

export default ObsController;
