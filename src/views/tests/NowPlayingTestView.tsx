import NowPlayingView from "../gameplay/nowplaying/NowPlayingView.tsx";
import { useEffect } from "react";

const NowPlayingTestView = () => {
  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  return (
    <NowPlayingView
      songName="Song Title Here"
      artist="Song Artist Here"
      bestEx={3540}
      bestScore={9889455}
    />
  );
};

export default NowPlayingTestView;
