"use client";

import { useState } from "react";
import useStore from "@/hooks/useStore";
import { useTodoStore, List } from "@/stores/todo";

export default function Page() {
  // zustandの永続化におけるNextの対応
  // docs: https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#usage-in-nextjs
  // Zustandが待機するため、useStoreからundifinedが返った場合に、空配列を代入
  // TODO: todoがList[]型だが、undifinedの可能性を暗黙的に持っているため対応する
  const todo = useStore(useTodoStore, (state) => state.todo) || [];
  const { addTodo } = useTodoStore();
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
