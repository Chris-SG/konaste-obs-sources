const Dash = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4142 29H68.5858L53.5858 44H3.41421L18.4142 29Z"
        stroke="black"
        fill={fill}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Dash;
