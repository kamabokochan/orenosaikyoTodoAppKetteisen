"use client";

import { useState } from "react";
import { useTodoStore } from "@/stores/todo";

export default function Page() {
  const { todo, addTodo } = useTodoStore();
  const [text, setText] = useState<string>("");

  const handleOnAddTodo = () => {
    addTodo({ label: text });
    setText("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={() => handleOnAddTodo()} disabled={text === ""}>
          追加
        </button>
      </div>
      <ul>
        {todo.map((item, i) => {
          return <li key={i}>{item.label}</li>;
        })}
      </ul>
    </>
  );
}
