import "./nowplaying.css";
import { GetGrade } from "../../../utils/scoreConverter.ts";

interface NowPlayingViewProps {
  songName: string;
  artist: string;
  bestScore: number;
  bestEx: number;
}

const NowPlayingView = ({
  songName,
  artist,
  bestEx,
  bestScore,
}: NowPlayingViewProps) => {
  const grade = GetGrade(bestScore);

  return (
    <>
      <div className="now-playing">
        <div className="song-name">{songName}</div>
        <div className="artist">{artist}</div>
      </div>
      <br />
      <div className="score-section">
        <div className="score-title">Personal Best</div>
        <div id="score" className={`grade-${grade}`}>
          {bestScore}
        </div>
        <div id="ex" className={`grade-${grade}`}>
          {bestEx}
        </div>
      </div>
    </>
  );
};

export default NowPlayingView;
