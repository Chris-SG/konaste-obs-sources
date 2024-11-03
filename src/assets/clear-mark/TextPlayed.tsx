import {
  LetterA,
  LetterD,
  LetterE,
  LetterL,
  LetterP,
  LetterY,
} from "../letters";

const TextPlayed = () => {
  const width = 144;
  const height = 24;
  const size = 180;
  const offset = size / 2 - width / 2;
  const verticalOffset = size / 2 - height / 2;
  return (
    <svg className="clear-mark-text" viewBox="0 0 180 180">
      <g id="letterP" transform={`translate(${offset}, ${verticalOffset})`}>
        <LetterP gradient="letter_linear_played" />
      </g>
      <g
        id="letterL"
        transform={`translate(${offset + 22}, ${verticalOffset})`}
      >
        <LetterL gradient="letter_linear_played" />
      </g>
      <g
        id="letterA"
        transform={`translate(${offset + 42}, ${verticalOffset})`}
      >
        <LetterA gradient="letter_linear_played" />
      </g>
      <g
        id="letterY"
        transform={`translate(${offset + 66}, ${verticalOffset})`}
      >
        <LetterY gradient="letter_linear_played" />
      </g>
      <g
        id="letterE"
        transform={`translate(${offset + 95}, ${verticalOffset})`}
      >
        <LetterE gradient="letter_linear_played" />
      </g>
      <g
        id="letterD"
        transform={`translate(${offset + 118}, ${verticalOffset})`}
      >
        <LetterD gradient="letter_linear_played" />
      </g>
      <defs>
        <linearGradient
          id={`letter_linear_played`}
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

export default TextPlayed;
