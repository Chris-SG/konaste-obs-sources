const Plus = ({ fill }: { fill: string }) => {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M43 2.41421V28V29H44H69.5858L54.5858 44H44H43V45V54.5858L28 69.5858V45V44H27H2.41421L17.4142 29H27H28V28V17.4142L43 2.41421Z"
        stroke="black"
        strokeWidth="2"
        fill={fill}
      />
    </svg>
  );
};

export default Plus;
