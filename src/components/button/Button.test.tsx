import { render, screen } from "@testing-library/react";
import { Button } from "./index";
import "@testing-library/jest-dom/extend-expect";

test("テキストが正しく渡るか", () => {
  render(<Button onClick={() => {}}>ボタン1</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("ボタン1");
});

test("classが正しく渡るか", () => {
  render(
    <Button onClick={() => {}} color="complete">
      ボタン1
    </Button>
  );
  const button = screen.getByRole("button");
  expect(button).toHaveClass("button", "complete");
});
