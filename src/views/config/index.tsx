import React from "react";

import StringConfigurationItem from "./StringConfigurationItem.tsx";
import MapConfigurationItem from "./MapConfigurationItem.tsx";

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
          keyValueSource={() =>
            Array.of(
              "",
              "UI_UNKNOWN",
              "UI_BOOT",
              "UI_LOAD_START",
              "UI_END_OF_CREDIT",
              "UI_HOME",
              "UI_SPLASH",
              "UI_RESULT",
              "UI_SONG_SELECT",
              "UI_AUTOPLAY",
              "UI_DEMO",
              "UI_START_CREDIT",
              "UI_START_LOGIN",
              "UI_LOGGED_IN",
              "UI_MODE_SELECT",
              "UI_SKILL_ANALYZER",
              "UI_MY_ROOM",
              "UI_SONG_PLAY",
            )
          }
        />
        <br />
        <StringConfigurationItem
          configurationId={"chapter-format"}
          configurationName={"Chapter Save format"}
          defaultValue={"{{NAME}} - {{ARTIST}}"}
          registerSubmitCallback={registerSubmitCallback}
        />
        <br />
        <input type="submit" value="Submit" key={"submit"} />
      </form>
    </div>
  );
};

export default Config;
