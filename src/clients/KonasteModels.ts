interface NowPlayingSongModel {
  songId: number;
  title: string;
  artist: string;
  difficultyId: number;
  difficulty: string;
  infiniteVersion: number;
  level: number;
  notes: number;
  peak: number;
  tsumami: number;
  tricky: number;
  handTrip: number;
  oneHand: number;
  jacketSmall: string;
  jacketNormal: string;
  jacketBig: string;
}

type ClearMarkType = "no" | "played" | "comp" | "ex" | "uc" | "puc";

type GradeType =
  | "S"
  | "AAA+"
  | "AAA"
  | "AA+"
  | "AA"
  | "A+"
  | "A"
  | "B"
  | "C"
  | "D"
  | "no";

interface History {
  songName: string;
  artist: string;
  difficulty: string;
  infiniteVersion: number;
  level: number;
  score: number;
  exScore: number;
  combo: number;
  bestScore: number;
  bestExScore: number;
  maxEx: number;
  clearMark: ClearMarkType;
  bestClearMark: ClearMarkType;
  grade: GradeType;
  bestGrade: GradeType;
  imagePath: string;
}

interface SongDifficultyScoreInfo {
  difficulty: number;
  konasteScore: number;
  konasteEx: number;
  konasteClearType: number;
  konasteGrade: number;
  maxChain: number;
  timestamp: number;
  arcadeScore: number;
  arcadeEx: number;
  arcadeClearType: number;
  arcadeGrade: number;
}

const DifficultyToNumerical: { [index: string]: number } = {
  novice: 0,
  advanced: 1,
  exhaust: 2,
  maximum: 3,
  infinite: 4,
};

type ScoreTableType = Map<number, Map<ClearMarkType | GradeType, number>>;

export type {
  ClearMarkType,
  History,
  GradeType,
  NowPlayingSongModel,
  SongDifficultyScoreInfo,
  ScoreTableType,
};

export { DifficultyToNumerical };
