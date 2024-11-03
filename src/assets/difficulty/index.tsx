import "./difficulty.css";
import Hexagon from "./Hexagon.tsx";

enum DifficultyOption {
  NOVICE,
  ADVANCED,
  EXHAUST,
  MAXIMUM,
  INFINITE,
  GRAVITY,
  HEAVENLY,
  VIVID,
  EXCEED,
}

const Difficulty = ({
  difficulty,
  level,
}: {
  difficulty: DifficultyOption;
  level: number;
}) => {
  return (
    <>
      <div
        className={`difficulty ${DifficultyOption[difficulty].toLowerCase()}`}
      >
        <svg
          id="difficulty-view"
          height={100}
          width={100}
          viewBox="0 0 100 100"
        >
          <defs>
            <filter
              id="subtle-white-outline"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="userSpaceOnUse"
            >
              <feMorphology
                in="SourceAlpha"
                operator="dilate"
                radius="1"
                result="expandedOutline"
              />

              <feGaussianBlur
                in="expandedOutline"
                stdDeviation="1.5"
                result="blurredOutline"
              />

              <feColorMatrix
                in="blurredOutline"
                type="matrix"
                values="1 0 0 0 1
                0 1 0 0 1
                0 0 1 0 1
                0 0 0 0.4 0"
                result="whiteOutline"
              />

              <feMerge>
                <feMergeNode in="whiteOutline" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <Hexagon id={DifficultyOption[difficulty].toLowerCase()} />
          <text id="difficulty-number" x="50" y="58" viewBox="0 0 100 100">
            {level}
          </text>
          <text
            textAnchor="middle"
            x="50"
            y="76"
            viewBox="0 0 100 100"
            className={`${DifficultyOption[difficulty].toLowerCase()}`}
          >
            {DifficultyOption[difficulty].toUpperCase()}
          </text>
        </svg>
      </div>
    </>
  );
};

export default Difficulty;

export { DifficultyOption };
