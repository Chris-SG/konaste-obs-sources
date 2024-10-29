import { useEffect, useState } from "react";

import OBSWebSocket, {
  OBSRequestTypes,
  OBSWebSocketError,
} from "obs-websocket-js";

import { SceneTransition } from "../config";

const ObsController = () => {
  const obsIp = localStorage.getItem("obs-ip") || "localhost",
    obsPort = localStorage.getItem("obs-port") || "4455",
    obsPassword = localStorage.getItem("obs-password") || undefined,
    sceneTransitions: Array<SceneTransition> = JSON.parse(
      localStorage.getItem("obs-scene-transitions") || "[]",
    ),
    konasteHost = localStorage.getItem("api-host")!,
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
        setCurrentUI(event.data);
      }
    },
    openKonasteApiConnection = () => {
      console.log("Opening konaste-api WebSocket");
      const konasteWebsocket = new WebSocket(`ws://${konasteHost}:4573/ws/ui`);

      setKonasteApi(konasteWebsocket);
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
    openKonasteApiConnection();
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
