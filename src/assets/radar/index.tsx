import "./radar.css";
import BaseRadar from "./BaseRadar.tsx";

interface RadarFields {
  notes: number;
  peak: number;
  tsumami: number;
  tricky: number;
  handTrip: number;
  oneHand: number;
}

const Radar = ({
  notes,
  peak,
  tsumami,
  tricky,
  handTrip,
  oneHand,
}: RadarFields) => {
  const rad = (60 * Math.PI) / 180;

  const pos1 = notes;
  const pos2x = Math.sin(rad) * peak;
  const pos2y = Math.cos(rad) * peak;
  const pos3x = Math.sin(rad) * tsumami;
  const pos3y = Math.cos(rad) * tsumami;
  const pos4 = tricky;
  const pos5x = Math.sin(rad) * handTrip;
  const pos5y = Math.cos(rad) * handTrip;
  const pos6x = Math.sin(rad) * oneHand;
  const pos6y = Math.cos(rad) * oneHand;

  const textOffset = 65;
  const textPos1 = Math.sin(rad) * textOffset;
  const textPos2 = Math.cos(rad) * textOffset;

  const radarDimension = 200;
  const halfRadarDimension = 100;

  return (
    <svg
      className="radarcontainer"
      width={400}
      height={400}
      viewBox="0 0 300 300"
      overflow="visible"
    >
      <svg
        width={halfRadarDimension}
        height={halfRadarDimension}
        x={halfRadarDimension / 2}
        y={halfRadarDimension / 2}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <BaseRadar />
      </svg>
      <svg
        className="radar"
        viewBox={`0 0 ${radarDimension} ${radarDimension}`}
        overflow="visible"
        width={halfRadarDimension}
        height={halfRadarDimension}
        x={halfRadarDimension / 2}
        y={halfRadarDimension / 2}
      >
        <defs>
          <radialGradient
            id="Gradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            fr="20%"
            r="80%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="var(--colour-stroke-1)" />
            <stop offset="100%" stopColor="var(--colour-stroke-2)" />
          </radialGradient>
        </defs>
        <path
          d={`M${halfRadarDimension} ${halfRadarDimension - pos1} L${halfRadarDimension + pos2x} ${halfRadarDimension - pos2y} L${halfRadarDimension + pos3x} ${halfRadarDimension + pos3y} L${halfRadarDimension} ${halfRadarDimension + pos4} L${halfRadarDimension - pos5x} ${halfRadarDimension + pos5y} L${halfRadarDimension - pos6x} ${halfRadarDimension - pos6y} Z`}
          fill="url(#Gradient)"
          fillOpacity="0.6"
          stroke="black"
          strokeWidth="1"
        />
      </svg>

      <text
        x={halfRadarDimension}
        y={halfRadarDimension - textOffset}
        className={"notes"}
      >
        NOTES
      </text>
      <text
        x={halfRadarDimension + textPos1}
        y={halfRadarDimension - textPos2}
        className={"peak"}
      >
        PEAK
      </text>
      <text
        x={halfRadarDimension + textPos1}
        y={halfRadarDimension + textPos2}
        className={"tsumami"}
      >
        TSUMAMI
      </text>
      <text
        x={halfRadarDimension}
        y={halfRadarDimension + textOffset}
        className={"tricky"}
      >
        TRICKY
      </text>
      <text
        x={halfRadarDimension - textPos1}
        y={halfRadarDimension + textPos2}
        className={"handtrip"}
      >
        HAND TRIP
      </text>
      <text
        x={halfRadarDimension - textPos1}
        y={halfRadarDimension - textPos2}
        className={"onehand"}
      >
        ONE HAND
      </text>
    </svg>
  );
};

export default Radar;
