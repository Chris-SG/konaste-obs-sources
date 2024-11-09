const Percent = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.402 1L26.3742 71H11.598L45.6258 1H60.402ZM18.5 17H11V2H26V17H18.5ZM61 69.5H46V54.5H61V69.5Z"
        stroke="black"
        strokeWidth="2"
        fill={fill}
        fillRule={"evenodd"}
      />
    </svg>
  );
};

export default Percent;
