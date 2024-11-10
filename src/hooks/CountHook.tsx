import { useEffect, useRef, useState } from "react";

const easeOutQuad = (t: number) => t * (2 - t),
  frameDuration = 1000 / 60,
  useCount = ({ duration, sigfig }: { duration: number; sigfig: number }) => {
    const [count, setCount] = useState(0),
      [start, setStart] = useState(0),
      [end, setEnd] = useState(0),
      counter = useRef<NodeJS.Timeout | undefined>(undefined);

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
        const sf = Math.pow(10, sigfig);
        setCount(Math.floor((start + (end - start) * progress) * sf) / sf);
        if (frame === totalFrames) {
          clearInterval(counter.current);
        }
      }, frameDuration);
    }, [end]);

    return { count, setStart, setEnd };
  };

export default useCount;
