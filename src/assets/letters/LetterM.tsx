const LetterM = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 30 24"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 5L6 6M6 6L1 11V23H6V6Z" />
      <path d="M13 23H18V1H10L7 4V6H13V23Z" />
      <path d="M24 23H29V1H21L18 4V6H24V23Z" />
    </svg>
  );
};

export default LetterM;
