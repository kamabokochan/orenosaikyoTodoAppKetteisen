import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./root.stories";
import "@testing-library/jest-dom/extend-expect";

const { AddTwoTodosAndCheckOneScenario } = composeStories(stories);

describe("play AddTwoTodosAndCheckOneScenario", () => {
  it("renders two todos", async () => {
    // Arrange
    const { container } = render(<AddTwoTodosAndCheckOneScenario />);

    // Act
    // TODO 下記のissueと同様の事象か？要解消
    // https://github.com/storybookjs/storybook/issues/21573
    // @ts-ignore
    await AddTwoTodosAndCheckOneScenario.play({ canvasElement: container });

    // Assert
    const todos = screen.getAllByTestId("todo-label");
    expect(todos).toHaveLength(2);
  });
  // TODO 保留
  // it("checks one todo", async () => {
  //   // Arrange
  //   const { container } = render(<AddTwoTodosAndCheckOneScenario />);

  //   // Act
  //   await AddTwoTodosAndCheckOneScenario.play({ canvasElement: container });

  //   // Assert
  //   const todos = screen.getAllByTestId("todo-label")[0];
  //   console.log(todos);
  //   // expect(todos).toHaveClass("label", "done");
  // });
});
