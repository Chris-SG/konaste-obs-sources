import "./score.css";
import { useEffect } from "react";

import useCount from "../../../hooks/CountHook.tsx";
import RenderedNumber from "../../../assets/numbers";

enum ComparisonType {
  NUMBER,
  PERCENTAGE,
  NONE,
}

type ScoreViewProps = {
  score: number;
  comparison: number;
  comparisonType: ComparisonType;
};

const GetComparisonView = (value: number, comparisonType: ComparisonType) => {
  switch (comparisonType) {
    case ComparisonType.NUMBER:
      return <RenderedNumber value={value} length={8} />;
    case ComparisonType.PERCENTAGE:
      return (
        <RenderedNumber
          value={value.toFixed(2).padStart(6, "0")}
          percentage
          length={5}
        />
      );
    case ComparisonType.NONE:
      return <></>;
  }
};

const ScoreView = ({ score, comparison, comparisonType }: ScoreViewProps) => {
  const { count, setStart, setEnd } = useCount({ duration: 1500, sigfig: 0 }),
    {
      count: comparisonCount,
      setStart: setComparisonStart,
      setEnd: setComparisonEnd,
    } = useCount({ duration: 1500, sigfig: 2 });

  useEffect(() => {
    setStart(count);
    setEnd(score);
  }, [score]);

  useEffect(() => {
    setComparisonStart(comparisonCount);
    setComparisonEnd(comparison);
  }, [comparison]);

  return (
    <div className="w-2/3">
      <RenderedNumber value={count} length={8} />
      <div className="float-right w-1/2">
        {GetComparisonView(comparisonCount, comparisonType)}
      </div>
    </div>
  );
};

export default ScoreView;

export { ComparisonType };
