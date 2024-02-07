interface NowPlayingViewProps {
  songName: string;
  artist: string;
  bestScore: number;
  bestEx: number;
}

const NowPlayingView = ({ songName, artist }: NowPlayingViewProps) => {
  return (
    <>
      <div className="now-playing">
        <div className="song-name">{songName}</div>
        <div className="artist">{artist}</div>
      </div>
    </>
  );
};

export default NowPlayingView;
