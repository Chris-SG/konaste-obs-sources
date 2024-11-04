import ClearMark from "./index.tsx";
import { Meta, StoryObj } from "@storybook/react";
import { ClearMarkType } from "../../clients/KonasteModels.ts";

const meta: Meta<typeof ClearMark> = {
  component: ClearMark,
  argTypes: {
    markType: {
      options: ["puc", "uc", "ex", "comp", "played"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClearMark>;

export const Primary: Story = {
  args: {
    markType: "puc",
  },
  render: ({ markType }: { markType: ClearMarkType }) => {
    return (
      <div
        style={{
          width: "20rem",
          height: "20rem",
          border: "1px solid black",
        }}
      >
        <ClearMark markType={markType} />
      </div>
    );
  },
};
