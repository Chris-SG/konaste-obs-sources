import { ReactElement, useEffect, useRef, useState } from "react";

interface StringConfigurationItemProps {
  configurationId: string;
  configurationName?: string;
  type?: string;
  registerSubmitCallback: (_: () => void) => void;
}

const Wrapper = ({
  children,
  configurationName,
}: {
  children: ReactElement;
  configurationName?: string;
}) => {
  if (!configurationName) return <>{children}</>;
  return (
    <label>
      {configurationName}
      <>{children}</>
    </label>
  );
};

const StringConfigurationItem = ({
  configurationId,
  configurationName,
  type = "text",
  registerSubmitCallback,
}: StringConfigurationItemProps) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem(configurationId) || "",
  );
  const valueRef = useRef<string>("");

  valueRef.current = value;

  useEffect(() => {
    const onSubmit = () => {
      console.log(`Setting ${configurationId} value ${valueRef.current}`);
      localStorage.setItem(configurationId, valueRef.current);
    };
    registerSubmitCallback(onSubmit);
  }, [configurationId, registerSubmitCallback]);

  return (
    <Wrapper configurationName={configurationName}>
      <input
        type={type}
        name={configurationName}
        key={configurationId}
        onChange={(event) => setValue(event.target.value)}
        defaultValue={value}
      />
    </Wrapper>
  );
};

export default StringConfigurationItem;
