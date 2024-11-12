import { ScoreTableType } from "../../../clients/KonasteModels.ts";
import { useEffect, useState } from "react";
import { getScoreTable } from "../../../clients/KonasteApiClient.ts";
import ScoreTableView from "./ScoreTableView.tsx";
import { useParams, useSearch } from "wouter";

const ScoreTable = () => {
  const [scoreTable, setScoreTable] = useState<ScoreTableType | undefined>(
    undefined,
  );
  const urlSearchParams = new URLSearchParams(useSearch());
  const difficultyStart: number = Number.parseInt(
    urlSearchParams.get("difficulty_start") || "0",
  );
  const difficultyEnd: number = Number.parseInt(
    urlSearchParams.get("difficulty_end") || "20",
  );
  const clearTypeStart: number = Number.parseInt(
    urlSearchParams.get("clear_type_start") || "0",
  );
  const clearTypeEnd: number = Number.parseInt(
    urlSearchParams.get("clear_type_end") || "10",
  );
  const additive: boolean = urlSearchParams.get("additive") !== null;

  const routeParams = useParams<string>();
  let type = (routeParams[0] || "level") as "level" | "difficulty";
  const clear = ((routeParams[1] || "mark") as "mark") || "grade";

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    getScoreTable(type, clear).then((table) => {
      if (table === undefined) {
        return;
      }

      setScoreTable(
        new Map(
          [...table.entries()].filter(
            (item) => item[0] >= difficultyStart && item[0] <= difficultyEnd,
          ),
        ),
      );

      // if (type === "level") {
      //   setScoreTable(
      //     new Map(
      //       [...table.entries()].filter(
      //         (item) => item[0] >= startingLevel && item[0] <= endingLevel,
      //       ),
      //     ),
      //   );
      // }
      // if (grouping === "difficulty") {
      //   setScoreTable(
      //     new Map(
      //       [...table.entries()].filter(
      //         (item) =>
      //           item[0] >= clearMarks.indexOf(cStartingPoint) &&
      //           item[0] <= clearMarks.indexOf(cEndingPoint),
      //       ),
      //     ),
      //   );
      // }
    });
  }, []);

  if (scoreTable === undefined) {
    return <></>;
  }
  return (
    <ScoreTableView
      data={scoreTable}
      additive={additive}
      clearTypeStart={clearTypeStart}
      clearTypeEnd={clearTypeEnd}
      clearType={clear}
    />
  );
};

export default ScoreTable;
