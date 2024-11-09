import { useEffect, useState } from "react";

import ScoreView, { ComparisonType } from "./ScoreView.tsx";
import {
  getNowPlayingSong,
  getSongDifficultyScoreInfo,
  openNowPlayingStatsWebSocket,
} from "../../../clients/KonasteApiClient.ts";
import { useSearch } from "wouter";
import { SongDifficultyScoreInfo } from "../../../clients/KonasteModels.ts";

interface Stats {
  chartMaxEx: number;
  chartMaxCombo: number;
  maxCombo: number;
  score: number;
  ex: number;
  missedEx: number;
  combo: number;
  timestamp: number;
}

type ScoreType = "score" | "ex";
const scoreTypes: ScoreType[] = ["score", "ex"];

const asScoreType = (type: String): ScoreType => {
  return scoreTypes.includes(type as ScoreType) ? (type as ScoreType) : "score";
};

type DisplayMode =
  | "max"
  | "max_percent"
  | "best"
  | "best_percent"
  | "current_max_percent"
  | "none";
const displayModes: DisplayMode[] = [
  "max",
  "max_percent",
  "best",
  "best_percent",
  "current_max_percent",
  "none",
];

const asDisplayMode = (mode: String): DisplayMode => {
  return displayModes.includes(mode as DisplayMode)
    ? (mode as DisplayMode)
    : "max";
};

const calculatePercentage = (score: number, comparison: number): number => {
  return (score * 100) / comparison;
};

const calculateComparisonValue = (
  scoreInfo: SongDifficultyScoreInfo,
  stats: Stats,
  scoreType: ScoreType,
  displayMode: DisplayMode,
) => {
  switch (displayMode) {
    case "max":
      return scoreType === "score" ? 10000000 : stats.chartMaxEx;
    case "max_percent":
      return scoreType === "score"
        ? calculatePercentage(stats.score, 10000000)
        : calculatePercentage(stats.ex, stats.chartMaxEx);
    case "best":
      return scoreType === "score"
        ? Math.max(scoreInfo.konasteScore, scoreInfo.arcadeScore)
        : Math.max(
            scoreInfo.konasteScore,
            scoreInfo.arcadeScore,
            scoreInfo.arcadeEx,
          );
    case "best_percent":
      return scoreType === "score"
        ? calculatePercentage(
            stats.score,
            Math.max(scoreInfo.konasteScore, scoreInfo.arcadeScore),
          )
        : calculatePercentage(
            stats.ex,
            Math.max(scoreInfo.konasteEx, scoreInfo.arcadeEx),
          );
    case "current_max_percent":
      return scoreType === "score"
        ? calculatePercentage(
            stats.score,
            Math.floor(10000000 * (stats.ex / (stats.missedEx + stats.ex))),
          )
        : calculatePercentage(stats.ex, stats.ex / (stats.missedEx + stats.ex));
    case "none":
      return 0;
  }
};

const Score = () => {
  const searchParams = new URLSearchParams(useSearch());
  const scoreType: ScoreType = asScoreType(
    searchParams.get("score_type") || "score",
  );
  const displayMode: DisplayMode = asDisplayMode(
    searchParams.get("display_mode") || "max",
  );

  const [konasteApi, setKonasteApi] = useState<WebSocket>();
  const [scoreInfo, setScoreInfo] = useState<SongDifficultyScoreInfo>();
  const [stats, setStats] = useState<Stats | undefined>(undefined);

  const messageEventListener = async (event: MessageEvent<string>) => {
    if (event.data === "null") {
      setStats(undefined);
      return;
    }
    setStats(JSON.parse(event.data));
  };

  useEffect(() => {
    document.documentElement.classList.add("transparent");
    openNowPlayingStatsWebSocket(100).then(setKonasteApi);
    getNowPlayingSong().then((result) => {
      !!result &&
        getSongDifficultyScoreInfo(result.songId, result.difficultyId).then(
          setScoreInfo,
        );
    });
  }, []);

  useEffect(() => {
    if (konasteApi === undefined) return;
    konasteApi.addEventListener("message", messageEventListener);
    return () =>
      konasteApi.removeEventListener("message", messageEventListener);
  }, [konasteApi]);

  if (
    konasteApi === undefined ||
    stats === undefined ||
    scoreInfo === undefined
  ) {
    return <></>;
  }

  const score = scoreType == "score" ? stats.score : stats.ex;

  return (
    <ScoreView
      score={score}
      comparison={calculateComparisonValue(
        scoreInfo,
        stats,
        scoreType,
        displayMode,
      )}
      comparisonType={
        (displayMode == "none" && ComparisonType.NONE) ||
        (["max_percent", "best_percent", "current_max_percent"].includes(
          displayMode,
        ) &&
          ComparisonType.PERCENTAGE) ||
        ComparisonType.NUMBER
      }
    />
  );
};

export default Score;
