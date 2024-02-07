import { useState } from "react";

interface SceneTransition {
  SceneName: string;
  UIEvent: string;
}

const Config = () => {
  const [host, setHost] = useState<string>(
    localStorage.getItem("api-host") || "",
  );

  const [obsIp, setObsIp] = useState<string>(
    localStorage.getItem("obs-ip") || "",
  );
  const [obsPort, setObsPort] = useState<string>(
    localStorage.getItem("obs-port") || "",
  );
  const [obsPassword, setObsPassword] = useState<string>(
    localStorage.getItem("obs-password") || "",
  );

  const [sceneTransitions, setSceneTransitions] = useState<
    Array<SceneTransition>
  >(JSON.parse(localStorage.getItem("obs-scene-transitions") || "[]"));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("api-host", host);

    localStorage.setItem("obs-ip", obsIp);
    localStorage.setItem("obs-port", obsPort);
    localStorage.setItem("obs-password", obsPassword);

    localStorage.setItem(
      "obs-scene-transitions",
      JSON.stringify(sceneTransitions),
    );
  };

  const setSceneName = (index: number, value: string) => {
    const newTransitions = [...sceneTransitions];
    newTransitions[index].SceneName = value;
    setSceneTransitions(newTransitions);
  };

  const setUIEvent = (index: number, value: string) => {
    const newTransitions = [...sceneTransitions];
    newTransitions[index].UIEvent = value;
    setSceneTransitions(newTransitions);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          API Host:
          <input
            type="text"
            name="api-host"
            onChange={(e) => setHost(e.target.value)}
            defaultValue={host}
          />
        </label>
        <br />
        <label>OBS Settings</label>
        <br />
        <label>
          Server IP:
          <input
            type="text"
            name="obs-ip"
            onChange={(e) => setObsIp(e.target.value)}
            defaultValue={obsIp}
          />
        </label>
        <br />
        <label>
          Server Port:
          <input
            type="text"
            name="obs-port"
            onChange={(e) => setObsPort(e.target.value)}
            defaultValue={obsPort}
          />
        </label>
        <br />
        <label>
          Server Password:
          <input
            type="password"
            name="obs-password"
            onChange={(e) => setObsPassword(e.target.value)}
            defaultValue={obsPassword}
          />
        </label>
        <br />
        <label>Scene Transitions</label>
        <br />
        {sceneTransitions.map((scene, index) => {
          return (
            <>
              <input
                type="text"
                id={`scene-${index}`}
                defaultValue={scene.SceneName}
                onChange={(e) => setSceneName(index, e.target.value)}
              />
              <input
                type="text"
                id={`ui-${index}`}
                defaultValue={scene.UIEvent}
                onChange={(e) => setUIEvent(index, e.target.value)}
              />
              <button
                onClick={() =>
                  setSceneTransitions(sceneTransitions.splice(index, 1))
                }
              >
                Remove
              </button>
              <br />
            </>
          );
        })}
        <button
          onClick={() =>
            setSceneTransitions([
              ...sceneTransitions,
              { SceneName: "", UIEvent: "" },
            ])
          }
        >
          Add new scene transition
        </button>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Config;

export type { SceneTransition };
