import "./global.scss";

import { TodoList } from "@/components/todoList";
import { InputTodo } from "@/components/inputTodo";

export default function Page() {
  return (
    <>
      <InputTodo />
      <TodoList />
    </>
  );
}
