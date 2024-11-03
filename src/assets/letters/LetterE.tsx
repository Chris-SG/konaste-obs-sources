const LetterE = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 26"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 16V13V7H20L26 1H1V7H4V8.5L1 10V25H20L26 19H7V16ZM7 16L13 10H21L15 16H7Z" />
    </svg>
  );
};

export default LetterE;
