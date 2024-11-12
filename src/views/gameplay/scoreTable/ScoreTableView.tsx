import {
  ClearMarkType,
  GradeType,
  ScoreTableType,
} from "../../../clients/KonasteModels.ts";
import ClearMark from "../../../assets/clear-mark";
import Grade from "../../../assets/grades";

const clearTypes: Array<ClearMarkType> = Array.of(
  "no",
  "played",
  "comp",
  "ex",
  "uc",
  "puc",
);

const gradeTypes: Array<GradeType> = Array.of(
  "no",
  "D",
  "C",
  "B",
  "A",
  "A+",
  "AA",
  "AA+",
  "AAA",
  "AAA+",
  "S",
);

const buildItemRow = (
  heading: string,
  v: Map<ClearMarkType | GradeType, number>,
  additive: boolean,
  start: number,
  end: number,
) => {
  let total = 0;
  const mapAsArray = Array.from(v);
  mapAsArray.map(([_, v]) => {
    total += v;
  });
  return (
    <>
      <th className="font-bold text-4xl text-yellow-300">{heading}</th>
      {mapAsArray.map(
        ([_, v], index) =>
          start <= index &&
          index <= end && (
            <td className="text-2xl text-gray-200">
              {additive
                ? mapAsArray
                    .slice(index)
                    .map(([_, n]) => n)
                    .reduce((a, b) => a + b, 0)
                : v}
              /{total}
            </td>
          ),
      )}
    </>
  );
};

const ScoreTableView = ({
  data,
  clearType,
  clearTypeStart,
  clearTypeEnd,
  additive = true,
}: {
  data: ScoreTableType;
  clearType: "mark" | "grade";
  clearTypeStart: number;
  clearTypeEnd: number;
  additive: boolean;
}) => {
  let topRow;
  if (clearType === "mark") {
    topRow = clearTypes.slice(clearTypeStart, clearTypeEnd + 1);
  } else {
    topRow = gradeTypes.slice(clearTypeStart, clearTypeEnd + 1);
  }
  return (
    <>
      <table className="table-auto content-evenly absolute left-0 top-0 border-2 [&_td]:border-gray-400 [&_td]:w-1/16 [&_td]:h-16 [&_td]:p-2 [&_td]:border-2">
        <tbody>
          <tr>
            <td></td>
            {clearType === "mark"
              ? topRow.map((type) => (
                  <td>
                    <ClearMark markType={type as ClearMarkType} />
                  </td>
                ))
              : topRow.map((type) => (
                  <td>
                    <Grade gradeType={type as GradeType} />
                  </td>
                ))}
          </tr>
          {Array.from(data).map(([key, value]) => (
            <tr key={key} className="">
              {buildItemRow(
                key.toString(),
                value,
                additive,
                clearTypeStart,
                clearTypeEnd,
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ScoreTableView;
