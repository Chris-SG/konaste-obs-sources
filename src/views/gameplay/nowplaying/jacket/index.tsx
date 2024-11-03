import { useEffect, useState } from "react";
import { NowPlayingSongModel } from "../../../../clients/KonasteModels.ts";
import {
  getImage,
  getNowPlayingSong,
} from "../../../../clients/KonasteApiClient.ts";
import { useSearch } from "wouter";

type JacketSize = "small" | "normal" | "big";

const NowPlayingJacket = () => {
  const urlSearchParams = new URLSearchParams(useSearch());
  const jacketSize: JacketSize =
    (urlSearchParams.get("size") as JacketSize) || "normal";
  const [nowPlayingStats, setNowPlayingStats] = useState<
    NowPlayingSongModel | undefined
  >(undefined);

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    getNowPlayingSong().then(setNowPlayingStats);
  }, []);

  if (nowPlayingStats === undefined) {
    return <></>;
  }

  const jacketUrl = (() => {
    switch (jacketSize) {
      case "small":
        return nowPlayingStats.jacketSmall;
      case "normal":
        return nowPlayingStats.jacketNormal;
      case "big":
        return nowPlayingStats.jacketBig;
    }
  })();

  return <img src={getImage(jacketUrl)} alt="jacket" />;
};

export default NowPlayingJacket;
