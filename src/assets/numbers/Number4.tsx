const Number4 = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="mask_number_4">
          <rect width="100%" height="100%" fill="white" />
          <path d="M18 18H38V38H18V18Z" fill="black" />
        </mask>
      </defs>
      <path
        d="M39 55V54H38H1V34.4142L34.4142 1H54V38V39H55H71V54H55H54V55V71H39V55Z"
        fill={fill}
        stroke="black"
        strokeWidth="2"
        mask="url(#mask_number_4)"
      />
      <path d="M18 18H38V38H18V18Z" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default Number4;
