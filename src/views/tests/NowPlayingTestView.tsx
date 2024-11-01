import { useEffect } from "react";

import NowPlayingView from "../gameplay/nowplaying/NowPlayingView.tsx";

const NowPlayingTestView = () => {
  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  return (
    <NowPlayingView
      songName="Song Title Here"
      artist="Song Artist Here"
      level={17}
      difficulty={"maximum"}
      imageUrl={"/"}
      infiniteVersion={0}
    />
  );
};

export default NowPlayingTestView;
