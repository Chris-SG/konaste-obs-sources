import {
  ClearMarkType,
  ScoreTableType,
} from "../../../clients/KonasteModels.ts";
import ClearMark from "../../../assets/clear-mark";

const types: Array<ClearMarkType> = Array.of(
  "no",
  "played",
  "comp",
  "ex",
  "uc",
  "puc",
);

const buildItemRow = (heading: string, v: Map<ClearMarkType, number>) => {
  let total = 0;
  v.values().forEach((v) => {
    total += v;
  });
  return (
    <>
      <th className="font-bold text-4xl text-yellow-300">{heading}</th>
      {types.map((type) => (
        <td className="text-2xl text-gray-200">
          {v.get(type) || 0}/{total}
        </td>
      ))}
    </>
  );
};

const ScoreTableView = ({ data }: { data: ScoreTableType }) => {
  return (
    <>
      <table className="table-auto content-evenly absolute left-0 top-0 [&_td]:w-1/16 [&_td]:h-16">
        <tbody>
          <tr>
            <td></td>
            {types.map((type) => (
              <td>
                <ClearMark markType={type} />
              </td>
            ))}
          </tr>
          {Array.from(data).map(([key, value]) => (
            <tr key={key} className="">
              {buildItemRow(key.toString(), value)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ScoreTableView;
