import StringConfigurationItem from "./StringConfigurationItem.tsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

test("configuration item is rendered without a name", () => {
  render(
    <StringConfigurationItem
      configurationId={"test"}
      registerSubmitCallback={() => {}}
    />,
  );
  expect(screen.getByRole("textbox")).toHaveValue("");
});

test("configuration item is rendered with a name", () => {
  render(
    <StringConfigurationItem
      configurationId={"test"}
      configurationName={"Field name"}
      registerSubmitCallback={() => {}}
    />,
  );
  expect(screen.findByText("Field name")).toBeTruthy();
});

test("text is returned when callback executed", async () => {
  let cb: Array<() => void> = Array.of();
  const { getByRole } = render(
    <StringConfigurationItem
      configurationId={"test"}
      configurationName={"Field name"}
      registerSubmitCallback={(fn) => {
        cb = Array.of(fn);
      }}
    />,
  );
  expect(cb).toHaveLength(1);

  const textbox = getByRole("textbox");
  await userEvent.type(textbox, "new text");

  expect(textbox).toHaveValue("new text");
  // expect(cb[0]()).toEqual("new text");
});
