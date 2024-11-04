import { useEffect, useState } from "react";
import { getHistory } from "../../../clients/KonasteApiClient.ts";
import { History } from "../../../clients/KonasteModels.ts";
import HistoryView, { ScoreForm } from "./HistoryView.tsx";
import { useSearch } from "wouter";

const PlayHistory = () => {
  const [history, setHistory] = useState<Array<History> | undefined>(undefined);

  const urlSearchParams = new URLSearchParams(useSearch());
  const scoreForm: ScoreForm =
    (urlSearchParams.get("form") as ScoreForm) || "under-best";
  const exForm: ScoreForm =
    (urlSearchParams.get("ex_form") as ScoreForm) || scoreForm;

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    getHistory().then(setHistory);
  }, []);

  if (history === undefined) {
    return <></>;
  }

  return (
    <HistoryView history={history} scoreForm={scoreForm} exForm={exForm} />
  );
};

export default PlayHistory;
