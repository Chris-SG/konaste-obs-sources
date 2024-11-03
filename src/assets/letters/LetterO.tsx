const LetterO = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 1H1V15L2 16H3L4 17H5V6H18V1Z" />
      <path d="M6 23L23 23V9L22 8H21L20 7H19V18H6V23Z" />
    </svg>
  );
};

export default LetterO;
