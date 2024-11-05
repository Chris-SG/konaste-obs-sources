import {
  ClearMarkType,
  ScoreTableType,
} from "../../../clients/KonasteModels.ts";
import ClearMark from "../../../assets/clear-mark";

const buildItemRow = (heading: string, v: Map<ClearMarkType, number>) => {
  const total = v.values().reduce((acc, n) => acc + n);
  return (
    <>
      <th className="font-bold text-4xl text-yellow-300">{heading}</th>
      {v
        .values()
        .map((entry) => (
          <td className="text-2xl text-gray-200">
            {entry}/{total}
          </td>
        ))
        .toArray()}
    </>
  );
};

const types: Array<ClearMarkType> = Array.of(
  "no",
  "played",
  "comp",
  "ex",
  "uc",
  "puc",
);

const ScoreTableView = ({ data }: { data: ScoreTableType }) => {
  console.log(
    data
      .entries()
      .map((s) => s[0])
      .toArray(),
  );
  return (
    <>
      <table className="table-auto content-evenly absolute left-0 top-0 [&_td]:w-1/12 [&_td]:h-16">
        <tbody>
          <tr>
            <td></td>
            {types.map((type) => (
              <td>
                <ClearMark markType={type} />
              </td>
            ))}
          </tr>
          {data
            .entries()
            .map((a) => (
              <tr className={""}>{buildItemRow(a[0].toString(), a[1])}</tr>
            ))
            .toArray()}
        </tbody>
      </table>
    </>
  );
};

export default ScoreTableView;
