import { GradeType } from "../../clients/KonasteModels.ts";
import GradeS from "./GradeS.tsx";
import GradeAAAPlus from "./GradeAAAPlus.tsx";
import GradeAAA from "./GradeAAA.tsx";
import GradeAAPlus from "./GradeAAPlus.tsx";
import GradeAPlus from "./GradeAPlus.tsx";
import GradeAA from "./GradeAA.tsx";
import GradeA from "./GradeA.tsx";

const Grade = ({ gradeType }: { gradeType: GradeType }) => {
  const GradeComponent = (() => {
    switch (gradeType) {
      case "S":
        return GradeS;
      case "AAA+":
        return GradeAAAPlus;
      case "AAA":
        return GradeAAA;
      case "AA+":
        return GradeAAPlus;
      case "AA":
        return GradeAA;
      case "A+":
        return GradeAPlus;
      case "A":
        return GradeA;
      case "B":
        return () => <div>B</div>;
      case "C":
        return () => <div>C</div>;
      case "D":
        return () => <div>D</div>;
      case "no":
        return () => <div>N/A</div>;
    }
  })();

  return <GradeComponent />;
};

export default Grade;
