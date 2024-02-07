import { useEffect, useState } from "react";
import NowPlayingView from "./NowPlayingView.tsx";

interface NowPlayingProps {
  includeArcadeStats: boolean;
}

interface NowPlayingStats {
  songId: number;
  title: string;
  artist: string;
  difficulty: number;
  personalBest: number;
  personalBestArcade: number;
  personalBestEx: number;
  personalBestExArcade: number;
  clearType: number;
  arcadeClearType: number;
}

const NowPlaying = ({ includeArcadeStats }: NowPlayingProps) => {
  const konasteHost = localStorage.getItem("api-host")!;
  const [nowPlayingStats, setNowPlayingStats] = useState<
    NowPlayingStats | undefined
  >(undefined);

  useEffect(() => {
    fetch(`http://${konasteHost}/game/nowplaying`)
      .then((response) => response.json() as Promise<{ data: NowPlayingStats }>)
      .then((response) => {
        setNowPlayingStats(response.data);
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
      bestScore={
        includeArcadeStats
          ? Math.max(
              nowPlayingStats.personalBest,
              nowPlayingStats.personalBestArcade,
            )
          : nowPlayingStats.personalBest
      }
      bestEx={
        includeArcadeStats
          ? Math.max(
              nowPlayingStats.personalBestEx,
              nowPlayingStats.personalBestExArcade,
            )
          : nowPlayingStats.personalBestEx
      }
    />
  );
};

export default NowPlaying;
