import { useEffect, useState } from "react";

import NowPlayingSongView from "./NowPlayingSongView.tsx";
import { getNowPlayingSong } from "../../../../clients/KonasteApiClient.ts";
import { NowPlayingSongModel } from "../../../../clients/KonasteModels.ts";

const NowPlayingSong = () => {
  const [nowPlayingStats, setNowPlayingStats] = useState<
    NowPlayingSongModel | undefined
  >(undefined);

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    getNowPlayingSong().then(setNowPlayingStats);
  }, []);

  if (nowPlayingStats === undefined) {
    return <></>;
  }
  return (
    <NowPlayingSongView
      songName={nowPlayingStats.title}
      artist={nowPlayingStats.artist}
      difficulty={nowPlayingStats.difficulty}
      infiniteVersion={nowPlayingStats.infiniteVersion}
      level={nowPlayingStats.level}
    />
  );
};

export default NowPlayingSong;
