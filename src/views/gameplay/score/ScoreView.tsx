import "./score.css";
import useCount from "../../../hooks/CountHook.tsx";
import { useEffect } from "react";

type ScoreViewProps = {
  score: number;
  ex: number;
  missedEx: number;
  rate: string;
};

const ScoreView = ({ score, ex, rate }: ScoreViewProps) => {
  const { count, setStart, setEnd } = useCount({ duration: 1500 });
  const {
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

  const GetGrade = (score: number) => {
    if (score < 7000000) return "D";
    if (score < 8000000) return "C";
    if (score < 8700000) return "B";
    if (score < 9000000) return "A";
    if (score < 9300000) return "A+";
    if (score < 9500000) return "AA";
    if (score < 9700000) return "AA+";
    if (score < 9800000) return "AAA";
    if (score < 9900000) return "AAA+";
    return "S";
  };

  return (
    <>
      <div id="score" className={GetGrade(count)}>
        {("00000000" + count).slice(-8)}
      </div>
      <div id="ex" className={GetGrade(count)}>
        {exCount}
      </div>
      <div id="rate">{rate}</div>
    </>
  );
};

export default ScoreView;
