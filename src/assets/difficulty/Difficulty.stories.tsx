import Difficulty, { DifficultyOption } from "./index.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Difficulty> = {
  component: Difficulty,
  argTypes: {
    difficulty: [...Array(7).keys()],
    level: {
      options: [...Array(20).keys()].map((i) => i + 1),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Difficulty>;

export const Primary: Story = {
  args: {
    difficulty: DifficultyOption.NOVICE,
    level: 1,
  },
  render: ({
    difficulty,
    level,
  }: {
    difficulty: DifficultyOption;
    level: number;
  }) => {
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
