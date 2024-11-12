const LetterAv2 = ({ fill }: { fill: string }) => {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="mask_letter_a">
          <rect width="100%" height="100%" fill="white" />
          <path
            d="M18 35.5858V17H54V25H29H28.5858L28.2929 25.2929L18 35.5858Z"
            fill="black"
          />
        </mask>
      </defs>
      <path
        d="M18 42H17V43V71H1V31.4142L31.4142 1H71V71H55V43V42H54H18Z"
        fill={fill}
        stroke="black"
        strokeWidth="2"
        mask="url(#mask_letter_a)"
      />
      <path
        d="M18 35.5858V17H54V25H29H28.5858L28.2929 25.2929L18 35.5858Z"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default LetterAv2;
