"use client";

import { useEffect, useState, useCallback } from "react";

import useStore from "@/hooks/useStore";
import { useTodoStore } from "@/stores/todo";

import "./global.scss";

import { Button } from "@/components/button";

export default function Page() {
  // zustandの永続化におけるNextの対応
  // docs: https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#usage-in-nextjs
  // Zustandが待機するため、useStoreからundifinedが返った場合に、空配列を代入
  // TODO: todoがList[]型だが、undifinedの可能性を暗黙的に持っているため対応する
  const todo = useStore(useTodoStore, (state) => state.todo) || [];
  const { addTodo, updateStatus, deleteTodo } = useTodoStore();
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
    <>
      <div className="register">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="TODOを追加する"
        />
      </div>
      <ul>
        {todo.map((item, i) => {
          return (
            <li key={i}>
              <p className={item.isDone ? "done" : ""}>{item.label}</p>
              <Button onClick={() => updateStatus(item.id)} color="complete">
                完了
              </Button>
              <Button onClick={() => deleteTodo(item.id)} color="delete">
                削除
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
