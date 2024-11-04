import React, { useEffect, useRef, useState } from "react";

interface MapConfigurationItemProps {
  configurationId: string;
  configurationName: string;
  registerSubmitCallback: (_: () => void) => void;
  keyValueSource?: () => Array<string>;
  itemValueSource?: () => Array<string>;
}

interface MapConfigurationElement {
  key: string;
  item: string;
}

const MapConfigurationItem: React.FC<MapConfigurationItemProps> = ({
  configurationId,
  configurationName,
  registerSubmitCallback,
  keyValueSource,
  itemValueSource,
}: MapConfigurationItemProps) => {
  const [value, setValue] = useState<Array<MapConfigurationElement>>(
    JSON.parse(localStorage.getItem(configurationId) || "[]"),
  );
  const valueRef = useRef<Array<MapConfigurationElement>>(value);

  valueRef.current = value;

  useEffect(() => {
    const onSubmit = () => {
      localStorage.setItem(configurationId, JSON.stringify(valueRef.current));
    };
    registerSubmitCallback(onSubmit);
    console.log("registered");
  }, [configurationId, registerSubmitCallback]);

  const setKey = (index: number, value: string) => {
    const newTransitions = [...valueRef.current];
    newTransitions[index].key = value;
    setValue(newTransitions);
  };
  const setItem = (index: number, value: string) => {
    const elements = [...valueRef.current];
    elements[index].item = value;
    setValue(elements);
  };

  return (
    <>
      <label>
        <strong>{configurationName}</strong>
      </label>
      <br />
      {value.map((element, index) => (
        <>
          {keyValueSource ? (
            <select
              key={`${configurationId}-key-${index}`}
              defaultValue={element.key}
              onChange={(e) => setKey(index, e.target.value)}
            >
              {keyValueSource().map((item, itemIndex) => (
                <option
                  value={item}
                  key={`${configurationId}-key-${index}-${itemIndex}`}
                >
                  {item}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              key={`${configurationId}-key-${index}`}
              defaultValue={element.key}
              onChange={(e) => setKey(index, e.target.value)}
            />
          )}

          {itemValueSource ? (
            <select
              key={`${configurationId}-item-${index}`}
              defaultValue={element.item}
              onChange={(e) => setItem(index, e.target.value)}
            >
              {itemValueSource().map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              key={`${configurationId}-item-${index}`}
              defaultValue={element.item}
              onChange={(e) => setItem(index, e.target.value)}
            />
          )}
          <input
            type={"button"}
            value={"Remove"}
            onClick={((i: number) => () => {
              setValue(value.toSpliced(i, 1));
            })(index)}
            key={`${configurationId}-remove-${index}`}
          />
          <br />
        </>
      ))}
      <input
        type={"button"}
        value={"Add"}
        onClick={() => setValue([...valueRef.current, { key: "", item: "" }])}
        key={`${configurationId}-add`}
      />
    </>
  );
};

export default MapConfigurationItem;

export type { MapConfigurationElement };
