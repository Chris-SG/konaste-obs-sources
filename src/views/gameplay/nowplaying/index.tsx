import { useEffect, useState } from "react";

import NowPlayingView from "./NowPlayingView.tsx";

interface NowPlayingStats {
  songId: number;
  title: string;
  artist: string;
  difficulty: string;
  infiniteVersion: number;
  level: number;
  notes: number;
  peak: number;
  tsumami: number;
  tricky: number;
  handTrip: number;
  oneHand: number;
  imageFile: string;
}

const NowPlaying = () => {
  const konasteHost = localStorage.getItem("api-host")!,
    [nowPlayingStats, setNowPlayingStats] = useState<
      NowPlayingStats | undefined
    >(undefined);

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    fetch(`http://${konasteHost}/game/nowplaying`)
      .then((response) => response.json() as Promise<NowPlayingStats>)
      .then((response) => {
        setNowPlayingStats(response);
      })
      .catch(() => setNowPlayingStats(undefined));
  }, [konasteHost]);

  if (nowPlayingStats === undefined) {
    return <></>;
  }
  return (
    <NowPlayingView
      songName={nowPlayingStats.title}
      artist={nowPlayingStats.artist}
      difficulty={nowPlayingStats.difficulty}
      infiniteVersion={nowPlayingStats.infiniteVersion}
      level={nowPlayingStats.level}
      imageUrl={`http://${konasteHost}/game/files?filename=${nowPlayingStats.imageFile}`}
    />
  );
};

export default NowPlaying;
