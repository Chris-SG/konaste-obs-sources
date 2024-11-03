const LetterY = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="33"
      height="24"
      viewBox="0 0 33 26"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 16V25H15V16L2 1H9L17 11M21 16L32 1H26L17 11M21 16L17 11" />
    </svg>
  );
};

export default LetterY;
