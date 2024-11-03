import { NowPlayingSongModel } from "./KonasteModels.ts";

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

const getImage = (image: String): string => {
  const konasteHost = localStorage.getItem("api-host")!;
  return `http:///${konasteHost}/game/files?filename=${image}`;
};

export { getNowPlayingSong, getImage };
