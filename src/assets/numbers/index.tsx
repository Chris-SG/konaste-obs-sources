import Number0 from "./Number0.tsx";
import Number1 from "./Number1.tsx";
import Number2 from "./Number2.tsx";
import Number3 from "./Number3.tsx";
import Number4 from "./Number4.tsx";
import Number5 from "./Number5.tsx";
import Number6 from "./Number6.tsx";
import Number7 from "./Number7.tsx";
import Number8 from "./Number8.tsx";
import Number9 from "./Number9.tsx";

const asSvg = (n: number) => {
  switch (n) {
    case 0:
      return <Number0 />;
    case 1:
      return <Number1 />;
    case 2:
      return <Number2 />;
    case 3:
      return <Number3 />;
    case 4:
      return <Number4 />;
    case 5:
      return <Number5 />;
    case 6:
      return <Number6 />;
    case 7:
      return <Number7 />;
    case 8:
      return <Number8 />;
    case 9:
      return <Number9 />;
    default:
      return <Number0 />;
  }
};

const RenderedNumber = ({
  value,
  length,
}: {
  value: number;
  length?: number;
}) => {
  const numbers = ("" + value)
    .padStart(length || value.toString().length, "0")
    .split("")
    .map(Number);

  return <div className="flex w-full space-x-0.5">{numbers.map(asSvg)}</div>;
};

export default RenderedNumber;

export {
  Number0,
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Number7,
  Number8,
  Number9,
};
