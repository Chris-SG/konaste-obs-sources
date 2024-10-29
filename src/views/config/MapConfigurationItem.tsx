import React, { useEffect, useRef, useState } from "react";

interface MapConfigurationItemProps {
  configurationId: string;
  configurationName: string;
  registerSubmitCallback: (_: () => void) => void;
}

interface Element {
  key: string;
  item: string;
}

const MapConfigurationItem: React.FC<MapConfigurationItemProps> = ({
  configurationId,
  configurationName,
  registerSubmitCallback,
}: MapConfigurationItemProps) => {
  const [value, setValue] = useState<Array<Element>>(
    JSON.parse(localStorage.getItem(configurationId) || "[]"),
  );
  const valueRef = useRef<Array<Element>>(value);

  valueRef.current = value;

  useEffect(() => {
    const onSubmit = () => {
      console.log(`Setting ${configurationId} value ${valueRef.current}`);
      localStorage.setItem(configurationId, JSON.stringify(valueRef.current));
    };
    registerSubmitCallback(onSubmit);
    console.log("registerd");
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
          <input
            type="text"
            key={`${configurationId}-key-${index}`}
            defaultValue={element.key}
            onChange={(e) => setKey(index, e.target.value)}
          />
          <input
            type="text"
            key={`${configurationId}-item-${index}`}
            defaultValue={element.item}
            onChange={(e) => setItem(index, e.target.value)}
          />
          <input
            type={"button"}
            value={"Remove"}
            onClick={() => {
              console.log(value.length);
              console.log(valueRef.current.length);
              console.log(value);
              console.log(valueRef.current.splice(index, 1));
              setValue(value.splice(index, 1));
            }}
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
