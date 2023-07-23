import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import App from "./page";
import { userEvent, within } from "@storybook/testing-library";

type Component = typeof App;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: App,
};
export default meta;

export const AddTwoTodosAndCheckOneScenario: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByTestId("input-todo"),
      "Write a blog post",
      {
        delay: 100,
      }
    );
    await userEvent.keyboard("{enter}", { delay: 100 });
    await userEvent.type(
      canvas.getByTestId("input-todo"),
      "Develop sample app",
      {
        delay: 100,
      }
    );
    await userEvent.keyboard("{enter}", { delay: 100 });
    await userEvent.click(canvas.getAllByTestId("complete-button")[0]);
  },
};
