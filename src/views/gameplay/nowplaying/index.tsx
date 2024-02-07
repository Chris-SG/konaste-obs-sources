import { useEffect, useState } from "react";

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
  }, []);

  if (nowPlayingStats === undefined) {
    return <></>;
  }
  return <></>;
};

export default NowPlaying;
