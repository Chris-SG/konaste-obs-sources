import "./nowplayingsong.css";
import Difficulty from "../../../../assets/difficulty";
import { DifficultyToNumerical } from "../../../../clients/KonasteModels.ts";

interface NowPlayingViewProps {
  songName: string;
  artist: string;
  level: number;
  difficulty: string;
  infiniteVersion: number;
}

const NowPlayingSongView = ({
  songName,
  artist,
  level,
  difficulty,
  infiniteVersion,
}: NowPlayingViewProps) => {
  const difficultyLevel =
    DifficultyToNumerical[difficulty] +
    (difficulty === "infinite" ? infiniteVersion : 0);

  return (
    <>
      <div className="now-playing-song flex h-40">
        <div className="w-1/8">
          <Difficulty difficulty={difficultyLevel} level={level} />
        </div>
        <div className="w-full truncate">
          <div className="song-name text-8xl text-gray-200">{songName}</div>
          <div className="artist text-4xl text-gray-300">{artist}</div>
        </div>
      </div>
    </>
  );
};

export default NowPlayingSongView;
