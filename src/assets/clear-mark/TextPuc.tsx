import { LetterC, LetterP, LetterU } from "../letters";

const TextPuc = () => {
  const width = 73;
  const height = 24;
  const size = 104;
  const offset = size / 2 - width / 2;
  const verticalOffset = size / 2 - height / 2;
  return (
    <svg className="clear-mark-text" viewBox="0 0 104 104">
      <g id="letterP" transform={`translate(${offset}, ${verticalOffset})`}>
        <LetterP gradient="letter_linear_puc" />
      </g>
      <g
        id="letterU"
        transform={`translate(${offset + 23}, ${verticalOffset})`}
      >
        <LetterU gradient="letter_linear_puc" />
      </g>
      <g
        id="letterC"
        transform={`translate(${offset + 48}, ${verticalOffset})`}
      >
        <LetterC gradient="letter_linear_puc" />
      </g>
      <defs>
        <linearGradient
          id={`letter_linear_puc`}
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

export default TextPuc;
