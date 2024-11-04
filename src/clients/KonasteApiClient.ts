import { History, NowPlayingSongModel } from "./KonasteModels.ts";

const apiLookup = async <T>(path: String): Promise<T | undefined> => {
  const konasteHost = localStorage.getItem("api-host")!;
  return fetch(`http://${konasteHost}/${path}`)
    .then((response) => response.json() as Promise<T>)
    .catch(() => undefined);
};

const getNowPlayingSong = async (): Promise<
  NowPlayingSongModel | undefined
> => {
  return apiLookup<NowPlayingSongModel>("game/nowplaying");
};

const getHistory = async (): Promise<Array<History> | undefined> => {
  return apiLookup<Array<History>>("game/history");
};

const getImage = (image: String): string => {
  const konasteHost = localStorage.getItem("api-host")!;
  return `http:///${konasteHost}/game/files?filename=${image}`;
};

export { getNowPlayingSong, getHistory, getImage };
