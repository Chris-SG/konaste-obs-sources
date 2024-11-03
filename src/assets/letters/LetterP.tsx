const LetterP = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 23V1H18V6H6V23H1Z" />
      <path d="M22 18H11L7 14V13H18V7H19L20 8H21L22 9V18Z" />
    </svg>
  );
};

export default LetterP;
