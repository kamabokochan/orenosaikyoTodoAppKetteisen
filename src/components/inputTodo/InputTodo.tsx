"use client";

import styles from "./InputTodo.module.scss";
import { useEffect, useState, useCallback } from "react";
import { useTodoStore } from "@/stores/todo";

export const InputTodo = () => {
  const { addTodo } = useTodoStore();
  const [text, setText] = useState<string>("");

  const handleOnAddTodo = () => {
    addTodo(text);
    setText("");
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleOnAddTodo();
      }
    },
    [text]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [text]);

  return (
    <div className={styles.register}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="TODOを追加する"
        className={styles.input}
        data-testid="input-todo"
      />
    </div>
  );
};
