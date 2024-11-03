import { useEffect } from "react";

import NowPlayingSongView from "../gameplay/nowplaying/song/NowPlayingSongView.tsx";

const NowPlayingTestView = () => {
  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  return (
    <NowPlayingSongView
      songName="Song Title Here"
      artist="Song Artist Here"
      level={17}
      difficulty={"maximum"}
      infiniteVersion={0}
    />
  );
};

export default NowPlayingTestView;
