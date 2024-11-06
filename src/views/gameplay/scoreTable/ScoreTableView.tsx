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

const buildItemRow = (
  heading: string,
  v: Map<ClearMarkType, number>,
  additive: boolean,
) => {
  let total = 0;
  Array.from(v).map(([_, v]) => {
    total += v;
  });
  return (
    <>
      <th className="font-bold text-4xl text-yellow-300">{heading}</th>
      {types.map((type, index) => (
        <td className="text-2xl text-gray-200">
          {additive
            ? Array.from(types.slice(index))
                .map((n) => v.get(n))
                .filter((n) => n !== undefined)
                .reduce((n, i) => n + i, 0)
            : v.get(type) || 0}
          /{total}
        </td>
      ))}
    </>
  );
};

const ScoreTableView = ({
  data,
  additive = true,
}: {
  data: ScoreTableType;
  additive: boolean;
}) => {
  return (
    <>
      <table className="table-auto content-evenly absolute left-0 top-0 [&_td]:w-1/16 [&_td]:h-16 [&_td]:p-2">
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
              {buildItemRow(key.toString(), value, additive)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ScoreTableView;
