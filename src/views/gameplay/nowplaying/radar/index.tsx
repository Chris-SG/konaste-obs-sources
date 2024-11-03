import { useEffect, useState } from "react";
import Radar from "../../../../assets/radar";
import { getNowPlayingSong } from "../../../../clients/KonasteApiClient.ts";

interface RadarData {
  notes: number;
  peak: number;
  tsumami: number;
  tricky: number;
  handTrip: number;
  oneHand: number;
}

const NowPlayingRadar = () => {
  const [radar, setRadar] = useState<RadarData | undefined>(undefined);

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    getNowPlayingSong().then(setRadar);
  }, []);

  if (radar === undefined) {
    return <></>;
  }

  return (
    <Radar
      handTrip={radar.handTrip}
      oneHand={radar.oneHand}
      notes={radar.notes}
      peak={radar.peak}
      tricky={radar.tricky}
      tsumami={radar.tsumami}
    />
  );
};

export default NowPlayingRadar;
