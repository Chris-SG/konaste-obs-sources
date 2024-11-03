const LetterL = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 26 26"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 25H1V1H7V19H18L24 25Z" />
    </svg>
  );
};

export default LetterL;
