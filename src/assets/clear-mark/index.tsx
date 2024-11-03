import "./clearmark.css";
import ClearHexagon from "./ClearHexagon.tsx";
import TextComp from "./TextComp.tsx";
import TextPuc from "./TextPuc.tsx";
import TextEx from "./TextEx.tsx";
import TextUc from "./TextUc.tsx";
import TextPlayed from "./TextPlayed.tsx";

type ClearMarkType = "puc" | "comp" | "ex" | "uc" | "played";

const ClearMark = ({ markType }: { markType: ClearMarkType }) => {
  const TextComponent = (() => {
    switch (markType) {
      case "puc":
        return TextPuc;
      case "comp":
        return TextComp;
      case "ex":
        return TextEx;
      case "uc":
        return TextUc;
      case "played":
        return TextPlayed;
    }
  })();
  return (
    <div className={markType}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        viewBox="0 0 120 120"
      >
        <ClearHexagon markType={markType} />
        <TextComponent />
      </svg>
    </div>
  );
};
export default ClearMark;
