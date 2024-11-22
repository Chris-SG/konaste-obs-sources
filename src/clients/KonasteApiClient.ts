import {
  History,
  NowPlayingSongModel,
  ScoreTableType,
  SongDifficultyScoreInfo,
} from "./KonasteModels.ts";

const apiLookup = async <T>(path: String): Promise<T | undefined> => {
  const konasteHost = localStorage.getItem("api-host")!;
  return fetch(`http://${konasteHost}/${path}`)
    .then((response) => response.json())
    .then((response: T) => response)
    .catch(() => undefined);
};

const openKonasteWebsocket = async (path: String) => {
  const konasteHost = localStorage.getItem("api-host")!;
  console.log("Opening konaste-api WebSocket");
  return new WebSocket(`ws://${konasteHost}/${path}`);
};

const openGameUiWebSocket = async (): Promise<WebSocket> => {
  return openKonasteWebsocket("ws/game/ui");
};

const openNowPlayingStatsWebSocket = async (
  rate?: number,
): Promise<WebSocket> => {
  return openKonasteWebsocket(`ws/game/nowplaying/stats?rate=${rate || 1000}`);
};

const getNowPlayingSong = async (): Promise<
  NowPlayingSongModel | undefined
> => {
  return apiLookup<NowPlayingSongModel>("game/nowplaying");
};

const getSongDifficultyScoreInfo = async (
  songId: number,
  difficultyId: number,
): Promise<SongDifficultyScoreInfo | undefined> => {
  return apiLookup<SongDifficultyScoreInfo>(
    `scores/${songId}/difficulties/${difficultyId}`,
  );
};

const getScoreTable = async (
  clear: "clear_mark" | "grade",
  type: "level" | "difficulty",
  aggregation: "none" | "left" | "right" | "up" | "down",
  typeRange: [number, number],
  clearRange: [number, number],
  ignoreMissingItems: boolean,
) => {
  return apiLookup<ScoreTableType>(
    `scores/table/${clear}/${type}?columnRange=${typeRange[0]}..${typeRange[1]}&rowRange=${clearRange[0]}..${clearRange[1]}&aggregation=${aggregation}&ignoreMissingItems=${ignoreMissingItems}`,
  );
};

const getHistory = async (): Promise<Array<History> | undefined> => {
  return apiLookup<Array<History>>("game/history");
};

const getImage = (image: String): string => {
  const konasteHost = localStorage.getItem("api-host")!;
  return `http:///${konasteHost}/game/files?filename=${image}`;
};

export {
  getNowPlayingSong,
  getSongDifficultyScoreInfo,
  getHistory,
  getImage,
  getScoreTable,
  openGameUiWebSocket,
  openNowPlayingStatsWebSocket,
};
