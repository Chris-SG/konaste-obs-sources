import { useEffect, useState } from "react";
import Radar from "../../../assets/radar";

interface RadarData {
  notes: number;
  peak: number;
  tsumami: number;
  tricky: number;
  handTrip: number;
  oneHand: number;
}

const CurrentRadar = () => {
  const konasteHost = localStorage.getItem("api-host")!,
    [radar, setRadar] = useState<RadarData | undefined>(undefined);

  useEffect(() => {
    document.documentElement.classList.add("transparent");
  }, []);

  useEffect(() => {
    fetch(`http://${konasteHost}/game/nowplaying`)
      .then((response) => response.json() as Promise<RadarData>)
      .then((response) => {
        setRadar(response);
      })
      .catch(() => setRadar(undefined));
  }, [konasteHost]);

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

export default CurrentRadar;
