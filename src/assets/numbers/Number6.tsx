// todo: number6 is not 100% correct
const Number6 = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="mask_number_6">
          <rect width="100%" height="100%" fill="white" />
          <rect x="18" y="44" width="36" height="10" fill="black" />
        </mask>
      </defs>
      <path
        d="M54.3979 1L62.3391 16H17H16V17V28V29H17H54.5229L71 49.354V54.5858L54.5858 71H17.4142L1 54.5858V18.3976L17.431 1H54.3979Z"
        fill={fill}
        stroke="black"
        strokeWidth="2"
        mask="url(#mask_number_6)"
      />
      <rect
        x="18"
        y="44"
        width="36"
        height="10"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Number6;
