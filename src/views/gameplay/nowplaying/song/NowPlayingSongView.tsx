import "./nowplayingsong.css";
import Difficulty from "../../../../assets/difficulty";

interface NowPlayingViewProps {
  songName: string;
  artist: string;
  level: number;
  difficulty: string;
  infiniteVersion: number;
}

const DifficultyToNumerical: { [index: string]: number } = {
  novice: 0,
  advanced: 1,
  exhaust: 2,
  maximum: 3,
  infinite: 4,
};

const NowPlayingSongView = ({
  songName,
  artist,
  level,
  difficulty,
  infiniteVersion,
}: NowPlayingViewProps) => {
  const difficultyLevel = Math.max(
    DifficultyToNumerical[difficulty],
    DifficultyToNumerical[difficulty] + infiniteVersion - 2,
  );
  return (
    <>
      <div className="now-playing-song">
        <Difficulty difficulty={difficultyLevel} level={level} />
        <div>
          <div className="song-name">{songName}</div>
          <div className="artist">{artist}</div>
        </div>
      </div>
    </>
  );
};

export default NowPlayingSongView;
