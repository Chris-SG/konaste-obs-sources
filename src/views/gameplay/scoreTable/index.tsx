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
  const colStart: number = Number.parseInt(
    urlSearchParams.get("col_start") || "0",
  );
  const colEnd: number = Number.parseInt(
    urlSearchParams.get("col_end") || "10",
  );
  const rowStart: number = Number.parseInt(
    urlSearchParams.get("row_start") || "0",
  );
  const rowEnd: number = Number.parseInt(
    urlSearchParams.get("row_end") || "20",
  );
  const aggregation =
    (urlSearchParams.get("aggregation") as
      | "left"
      | "right"
      | "up"
      | "down"
      | "none") || "none";

  const routeParams = useParams<string>();
  let type = (routeParams[0] || "level") as "level" | "difficulty";
  const clear = ((routeParams[1] || "mark") as "mark") || "grade";

  console.log(type, clear);

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    getScoreTable(
      clear,
      type,
      aggregation,
      [colStart, colEnd],
      [rowStart, rowEnd],
    ).then((table) => {
      if (table === undefined) {
        return;
      }

      setScoreTable(table);
    });
  }, []);

  if (scoreTable === undefined) {
    return <></>;
  }
  return <ScoreTableView data={scoreTable} clearType={clear} />;
};

export default ScoreTable;
