import "./score.css";
import { useEffect } from "react";

import useCount from "../../../hooks/CountHook.tsx";
import { GetGrade } from "../../../utils/scoreConverter.ts";

type ScoreViewProps = {
  score: number;
  ex: number;
  missedEx: number;
  rate: string;
};

const ScoreView = ({ score, ex, rate }: ScoreViewProps) => {
  const { count, setStart, setEnd } = useCount({ duration: 1500 }),
    {
      count: exCount,
      setStart: setExStart,
      setEnd: setExEnd,
    } = useCount({ duration: 1500 });

  useEffect(() => {
    setStart(count);
    setEnd(score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  useEffect(() => {
    setExStart(exCount);
    setExEnd(ex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ex]);

  return (
    <>
      <div id="score-view">
        <div id="score" className={`grade-${GetGrade(count)}`}>
          {`00000000${count}`.slice(-8)}
        </div>
        <div id="ex" className={`grade-${GetGrade(count)}`}>
          {exCount}
        </div>
        <div id="rate">{rate}</div>
      </div>
    </>
  );
};

export default ScoreView;
