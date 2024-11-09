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

const getScoreTable = async (type: "level" | "difficulty") => {
  return apiLookup<ScoreTableType>(`scores/table/${type}/mark`).then((data) => {
    if (!data) return data;
    return new Map(
      Object.entries(data).map(([key, innerObject]) => [
        key,
        new Map(Object.entries(innerObject as Record<string, number>)),
      ]),
    ) as unknown as ScoreTableType;
  });
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
