const LetterA = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="29"
      height="24"
      viewBox="0 0 29 26"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7L13 1H28V25H22V15H7V25H1V13L7 7ZM7 7H22V10H10.5L7 13.5V7Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default LetterA;
