import React, { useEffect } from "react";

import ScoreView from "../gameplay/score/ScoreView.tsx";

const ScoreTestView = () => {
  const [score, setScore] = React.useState(0),
    [rate, setRate] = React.useState("00.00");
  useEffect(() => {
    setRate((score / 100000).toFixed(2));
    if (score >= 10000000) {
      setTimeout(() => {
        setScore(0);
      }, 3000);
    } else {
      const scoreIncrement = Math.floor(500000 + Math.random() * 500000);
      setTimeout(() => {
        setScore(Math.min(score + scoreIncrement, 10000000));
      }, 1000);
    }
  }, [score]);

  return <ScoreView score={score} ex={5730} missedEx={573} rate={rate} />;
};

export default ScoreTestView;
