import { useEffect, useState } from "react";
import ScoreView from "./ScoreView.tsx";

interface Stats {
  chartMaxEx: number;
  chartMaxCombo: number;
  maxCombo: number;
  score: number;
  ex: number;
  missedEx: number;
  combo: number;
  timestamp: number;
}

const Score = () => {
  const konasteHost = localStorage.getItem("api-host")!;
  const [konasteApi, setKonasteApi] = useState<WebSocket>();
  const [stats, setStats] = useState<Stats | undefined>(undefined);

  const messageEventListener = async (event: MessageEvent<string>) => {
    console.log(event.data);
    if (event.data === "null") {
      setStats(undefined);
      return;
    }
    setStats(JSON.parse(event.data));
  };

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    openKonasteApiConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (konasteApi === undefined) return;
    konasteApi.addEventListener("message", messageEventListener);
    return () =>
      konasteApi.removeEventListener("message", messageEventListener);
  }, [konasteApi]);

  const openKonasteApiConnection = () => {
    console.log("Opening konaste-api WebSocket");
    const konasteWebsocket = new WebSocket(
      `ws://${konasteHost}:4573/ws/game/nowplaying/stats?rate=100`,
    );

    setKonasteApi(konasteWebsocket);
  };

  if (konasteApi === undefined || stats === undefined) {
    // return <ScoreView score={0} ex={0} rate={"0"} />
    return <></>;
  }

  return (
    <ScoreView
      score={stats.score}
      ex={stats.ex}
      missedEx={stats.missedEx}
      rate={
        stats.ex === 0 && stats.missedEx === 0
          ? "100.00"
          : ((stats.ex * 100) / (stats.ex + stats.missedEx)).toFixed(2)
      }
    />
  );
};

export default Score;
