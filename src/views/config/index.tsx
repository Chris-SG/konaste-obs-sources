import React from "react";

import StringConfigurationItem from "./StringConfigurationItem.tsx";
import MapConfigurationItem from "./MapConfigurationItem.tsx";

interface SceneTransition {
  SceneName: string;
  UIEvent: string;
}

const Config = () => {
  let onSubmitCallbacks: Array<() => void> = Array.of();

  const registerSubmitCallback = (onSubmit: () => void) => {
      onSubmitCallbacks = Array.of(...onSubmitCallbacks, onSubmit);
    },
    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onSubmitCallbacks.forEach((cb) => cb());
    };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <StringConfigurationItem
          configurationId={"api-host"}
          configurationName={"API Host"}
          registerSubmitCallback={registerSubmitCallback}
        />
        <br />
        <label>OBS Settings</label>
        <br />
        <StringConfigurationItem
          configurationId={"obs-ip"}
          configurationName={"Server IP"}
          registerSubmitCallback={registerSubmitCallback}
        />
        <br />
        <StringConfigurationItem
          configurationId={"obs-port"}
          configurationName={"Server Port"}
          registerSubmitCallback={registerSubmitCallback}
        />
        <br />
        <StringConfigurationItem
          configurationId={"obs-password"}
          configurationName={"Server Password"}
          type={"password"}
          registerSubmitCallback={registerSubmitCallback}
        />
        <br />
        <MapConfigurationItem
          configurationId={"scene-transitions"}
          configurationName={"Scene Transitions"}
          registerSubmitCallback={registerSubmitCallback}
        />
        <br />
        <input type="submit" value="Submit" key={"submit"} />
      </form>
    </div>
  );
};

export default Config;

export type { SceneTransition };
