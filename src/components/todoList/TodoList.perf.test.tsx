// https://ja.legacy.reactjs.org/docs/profiler.html
// TodoList の Todo が100個レンダリングされる場合の描画時間を、200ms 未満であることを確認するテスト

import { render } from "@testing-library/react";
import { Presenter } from "./Presenter";
import { Profiler } from "react";
import { List } from "@/stores/todo";

describe("TodoList", () => {
  it("renders with acceptable performance", () => {
    // Arrange
    const onRender = jest.fn();
    const todo: List[] = [...Array(100)].map((_, index) => {
      return {
        id: index.toString(),
        label: "label",
        isDone: false,
      };
    });
    const updateStatus = () => {};
    const deleteTodo = () => {};

    const props = {
      todo,
      updateStatus,
      deleteTodo,
    };

    // Act
    render(
      <Profiler id="PerformanceTestComponent" onRender={onRender}>
        <Presenter {...props} />
      </Profiler>
    );

    // Assert
    // actualDuration: 現在の更新で Profiler とその子孫のレンダーに要した時間
    const [, , actualDuration, , , , ,] = onRender.mock.calls[0];
    expect(actualDuration).toBeLessThan(200);
  });
});
