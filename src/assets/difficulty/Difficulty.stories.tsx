import Difficulty from "./index.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Difficulty> = {
  component: Difficulty,
  argTypes: {
    difficulty: Array.of(
      "novice",
      "advanced",
      "exhaust",
      "maximum",
      "infinite",
      "gravity",
      "heavenly",
      "vivid",
    ),
    level: {
      options: [...Array(20).keys()].map((i) => i + 1),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Difficulty>;

export const Primary: Story = {
  args: {
    difficulty: "novice",
    level: 1,
  },
  render: ({ difficulty, level }: { difficulty: string; level: number }) => {
    return (
      <div
        style={{
          width: "20rem",
          height: "20rem",
          border: "1px solid black",
        }}
      >
        <Difficulty difficulty={difficulty} level={level} />
      </div>
    );
  },
};
