import { LetterC, LetterM, LetterO, LetterP } from "../letters";

const TextEx = () => {
  const width = 98;
  const height = 24;
  const size = 150;
  const offset = size / 2 - width / 2;
  const verticalOffset = size / 2 - height / 2;
  return (
    <svg className="clear-mark-text" viewBox="0 0 150 150">
      <g id="letterC" transform={`translate(${offset}, ${verticalOffset})`}>
        <LetterC gradient="letter_linear_ex" />
      </g>
      <g
        id="letterO"
        transform={`translate(${offset + 23}, ${verticalOffset})`}
      >
        <LetterO gradient="letter_linear_ex" />
      </g>
      <g
        id="letterM"
        transform={`translate(${offset + 46}, ${verticalOffset})`}
      >
        <LetterM gradient="letter_linear_ex" />
      </g>
      <g
        id="letterP"
        transform={`translate(${offset + 75}, ${verticalOffset})`}
      >
        <LetterP gradient="letter_linear_ex" />
      </g>
      <defs>
        <linearGradient
          id={`letter_linear_ex`}
          x1="15"
          y1="4"
          x2="15"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--letter-colour-1)" />
          <stop stopColor="var(--letter-colour-2)" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TextEx;
