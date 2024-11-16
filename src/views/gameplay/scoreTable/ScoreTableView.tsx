import {
  ClearMarkType,
  GradeType,
  ScoreTableType,
  TableRow,
  TableTitle,
} from "../../../clients/KonasteModels.ts";
import ClearMark from "../../../assets/clear-mark";
import Grade from "../../../assets/grades";
//
// const clearTypes: Array<ClearMarkType> = Array.of(
//   "no",
//   "played",
//   "comp",
//   "ex",
//   "uc",
//   "puc",
// );
//
// const gradeTypes: Array<GradeType> = Array.of(
//   "no",
//   "D",
//   "C",
//   "B",
//   "A",
//   "A+",
//   "AA",
//   "AA+",
//   "AAA",
//   "AAA+",
//   "S",
// );

const buildItemRow = (title: TableTitle, row: TableRow) => {
  return (
    <>
      <th className="font-bold text-4xl text-yellow-300">{title.title}</th>
      {row.data.map((c) => (
        <td className="text-2xl text-gray-200">
          {c}/{title.count}
        </td>
      ))}
    </>
  );
};

const ScoreTableView = ({
  data,
  clearType,
}: {
  data: ScoreTableType;
  clearType: "mark" | "grade";
}) => {
  return (
    <>
      <table className="table-auto content-evenly absolute left-0 top-0 border-2 [&_td]:border-gray-400 [&_td]:w-1/16 [&_td]:h-16 [&_td]:p-2 [&_td]:border-2">
        <tbody>
          <tr>
            <td></td>
            {clearType === "mark"
              ? data.columnTitles.map((type) => (
                  <td>
                    <ClearMark markType={type.title as ClearMarkType} />
                  </td>
                ))
              : data.columnTitles.map((type) => (
                  <td className="h-10">
                    <Grade gradeType={type.title as GradeType} />
                  </td>
                ))}
          </tr>
          {Array.from(data.rowTitles)
            .map((title, index): [TableTitle, TableRow] => [
              title,
              data.rows[index],
            ])
            .map(([title, row]) => (
              <tr key={title.title} className="">
                {buildItemRow(title, row)}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ScoreTableView;
