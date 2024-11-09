const Period = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="31"
        y="60"
        width="10"
        height="10"
        fill={fill}
        stroke="black"
        stroke-width="2"
      />
    </svg>
  );
};

export default Period;
