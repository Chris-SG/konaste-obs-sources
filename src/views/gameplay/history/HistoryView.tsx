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
      case "under-best":
        return `-${Math.max(historyEntry.bestScore, historyEntry.score) - historyEntry.score}`;
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
      case "under-best":
        return `-${Math.max(historyEntry.bestExScore, historyEntry.exScore) - historyEntry.exScore}`;
      case "perfect":
        return historyEntry.maxEx;
      case "under-perfect":
        return `-${historyEntry.maxEx - historyEntry.exScore}`;
    }
  };

  return (
    <table className="table-fixed content-evenly w-full">
      <tbody>
        {history.map((item) => (
          <tr className={"flex h-20 [&_td]:content-center "}>
            <td>
              <div className="w-20">
                <Difficulty
                  difficulty={DifficultyToNumerical[item.difficulty]}
                  level={item.level}
                />
              </div>
            </td>
            <td>
              <ClearMark markType={item.clearMark} />
            </td>
            <td className="w-2/6">
              <div className="invisible">_</div>
              <div className="font-bold">{item.songName}</div>
              <div className="text-sm text-gray-400">{item.artist}</div>
            </td>
            <td className="w-1/6">
              <div className="invisible">_</div>
              <div className="font-bold">{item.score}</div>
              <div className="text-sm text-gray-400">
                {calculateScoreUnderValue(item, scoreForm)}
              </div>
            </td>
            <td className="w-1/6">
              <div className="invisible">_</div>
              <div className="font-bold">{item.exScore}</div>
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
