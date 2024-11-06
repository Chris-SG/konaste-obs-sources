import {
  ClearMarkType,
  Grade,
  ScoreTableType,
} from "../../../clients/KonasteModels.ts";
import { useEffect, useState } from "react";
import { getScoreTable } from "../../../clients/KonasteApiClient.ts";
import ScoreTableView from "./ScoreTableView.tsx";
import { useSearch } from "wouter";

type AccumulationForm = "individual" | "additive";
type GoalType = "grade" | "mark";

const clearMarks: Array<ClearMarkType> = Array.of(
  "no",
  "played",
  "comp",
  "ex",
  "uc",
  "puc",
);

interface GoalFormat {
  accumulationForm?: AccumulationForm;
  type: GoalType;
  grouping: "level" | "difficulty";
  cStartingPoint?: ClearMarkType;
  gStartingPoint?: Grade;
  cEndingPoint?: ClearMarkType;
  gEndingPoint?: Grade;
}

const ScoreTable = ({
  grouping,
  cStartingPoint = "no",
  cEndingPoint = "puc",
}: GoalFormat) => {
  const [scoreTable, setScoreTable] = useState<ScoreTableType | undefined>(
    undefined,
  );
  const urlSearchParams = new URLSearchParams(useSearch());
  const startingLevel: number = Number.parseInt(
    urlSearchParams.get("level_start") || "1",
  );
  const endingLevel: number = Number.parseInt(
    urlSearchParams.get("level_end") || "20",
  );
  const additive: boolean = urlSearchParams.get("additive") !== null;

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    getScoreTable(grouping).then((table) => {
      if (table === undefined) {
        return;
      }

      if (grouping === "level") {
        setScoreTable(
          new Map(
            [...table.entries()].filter(
              (item) => item[0] >= startingLevel && item[0] <= endingLevel,
            ),
          ),
        );
      }
      if (grouping === "difficulty") {
        setScoreTable(
          new Map(
            [...table.entries()].filter(
              (item) =>
                item[0] >= clearMarks.indexOf(cStartingPoint) &&
                item[0] <= clearMarks.indexOf(cEndingPoint),
            ),
          ),
        );
      }
    });
  }, []);

  if (scoreTable === undefined) {
    return <></>;
  }
  return <ScoreTableView data={scoreTable} additive={additive} />;
};

export default ScoreTable;
