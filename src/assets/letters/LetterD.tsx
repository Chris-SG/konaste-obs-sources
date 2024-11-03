const LetterD = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 26"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 7V1H1V7H4V8.5L1 10V25H14L20 19M20 7H7V13V16V19H20M20 7V19M20 7L26 12V19H20" />
    </svg>
  );
};

export default LetterD;
