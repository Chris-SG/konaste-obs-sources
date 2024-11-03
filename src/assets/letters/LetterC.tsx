const LetterC = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 1H10L1 10V14L10 23H23L18 18H6V6H18L23 1Z" />
    </svg>
  );
};

export default LetterC;
