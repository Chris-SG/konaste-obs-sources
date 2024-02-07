import NowPlayingView from "../gameplay/nowplaying/NowPlayingView.tsx";

const NowPlayingTestView = () => {
  return (
    <NowPlayingView
      songName="Song Title Here"
      artist="Song Artist Here"
      bestEx={3540}
      bestScore={97894455}
    />
  );
};

export default NowPlayingTestView;
