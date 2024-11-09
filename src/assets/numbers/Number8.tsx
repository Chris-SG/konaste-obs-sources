const Number8 = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="mask_number_8">
          <rect width="100%" height="100%" fill="white" />
          <path d="M55 45V55H17V45H55ZM55 27H17V17H55V27Z" fill="black" />
        </mask>
      </defs>
      <g>
        <path
          d="M71 54.5858L54.5858 71H1V19.3472L15.4846 1H71V54.5858Z"
          stroke="black"
          strokeWidth="2"
          mask="url(#mask_number_8)"
          fill={fill}
        />
        <path
          d="M55 45V55H17V45H55ZM55 27H17V17H55V27Z"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default Number8;
