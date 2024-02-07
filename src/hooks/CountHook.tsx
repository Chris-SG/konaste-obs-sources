import { useEffect, useRef, useState } from "react";

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

const useCount = ({ duration }: { duration: number }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const counter = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (count === end) {
      return;
    }
    if (counter !== undefined) {
      clearInterval(counter.current);
      counter.current = undefined;
    }
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    counter.current = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(Math.floor(start + (end - start) * progress));
      if (frame === totalFrames) {
        clearInterval(counter.current);
      }
    }, frameDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end]);

  return { count, setStart, setEnd };
};

export default useCount;
