interface NowPlayingSongModel {
  songId: number;
  title: string;
  artist: string;
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

type ClearMarkType = "puc" | "comp" | "ex" | "uc" | "played";

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
  clearMark: ClearMarkType;
  maxEx: number;
  imagePath: string;
}

const DifficultyToNumerical: { [index: string]: number } = {
  novice: 0,
  advanced: 1,
  exhaust: 2,
  maximum: 3,
  infinite: 4,
};

export type { ClearMarkType, History, NowPlayingSongModel };

export { DifficultyToNumerical };