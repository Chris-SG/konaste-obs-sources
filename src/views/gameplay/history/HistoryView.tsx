import "./historyview.css";

import {
  DifficultyToNumerical,
  History,
} from "../../../clients/KonasteModels.ts";
import ClearMark from "../../../assets/clear-mark";
import Difficulty from "../../../assets/difficulty";

type ScoreForm = "none" | "best" | "under-best" | "perfect" | "under-perfect";

const HistoryView = ({
  history,
  scoreForm,
  exForm,
}: {
  history: Array<History>;
  scoreForm: ScoreForm;
  exForm: ScoreForm;
}) => {
  const calculateScoreUnderValue = (
    historyEntry: History,
    scoreForm: ScoreForm,
  ) => {
    switch (scoreForm) {
      case "none":
        return " ";
      case "best":
        return historyEntry.bestScore;
      case "under-best": {
        const marker = historyEntry.bestScore <= historyEntry.score ? "+" : "-";
        return `${marker}${Math.abs(historyEntry.bestScore - historyEntry.score)}`;
      }
      case "perfect":
        return "10000000";
      case "under-perfect":
        return `-${10000000 - historyEntry.score}`;
    }
  };
  const calculateExUnderValue = (
    historyEntry: History,
    scoreForm: ScoreForm,
  ) => {
    switch (scoreForm) {
      case "none":
        return " ";
      case "best":
        return historyEntry.bestExScore;
      case "under-best": {
        const marker =
          historyEntry.bestExScore <= historyEntry.exScore ? "+" : "-";
        return `${marker}${Math.abs(historyEntry.bestExScore - historyEntry.exScore)}`;
      }
      case "perfect":
        return historyEntry.maxEx;
      case "under-perfect":
        return `-${historyEntry.maxEx - historyEntry.exScore}`;
    }
  };

  return (
    <table className="table-fixed content-evenly w-full absolute left-0 top-0">
      <tbody>
        {history.map((item) => (
          <tr className={"flex h-20 [&_td]:content-center text-gray-200"}>
            <td>
              <div className="w-20">
                <Difficulty
                  difficulty={
                    DifficultyToNumerical[item.difficulty] +
                    (item.difficulty === "infinite" ? item.infiniteVersion : 0)
                  }
                  level={item.level}
                />
              </div>
            </td>
            <td>
              <ClearMark markType={item.clearMark} />
            </td>
            <td className="w-3/6">
              <div className="invisible">_</div>
              <div className="font-bold text-2xl truncate">{item.songName}</div>
              <div className="text-sm text-gray-400">{item.artist}</div>
            </td>
            <td className="w-1/6">
              <div className="invisible">_</div>
              <div className="font-bold text-2xl">{item.score}</div>
              <div className="text-sm text-gray-400">
                {calculateScoreUnderValue(item, scoreForm)}
              </div>
            </td>
            <td className="w-1/6">
              <div className="invisible">_</div>
              <div className="font-bold text-2xl">{item.exScore}</div>
              <div className="text-sm text-gray-400">
                {calculateExUnderValue(item, exForm)}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryView;

export type { ScoreForm };
