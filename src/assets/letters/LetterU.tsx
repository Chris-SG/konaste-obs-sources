const LetterU = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 35 34"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34 1H26V26H9.5L9 1H1V19L15 33H34V1Z" stroke="black" />
    </svg>
  );
};

export default LetterU;
