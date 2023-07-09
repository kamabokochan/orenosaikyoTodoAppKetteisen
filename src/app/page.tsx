"use client";

import { useState } from "react";

type List = {
  label: string;
};

export default function Page() {
  const [text, setText] = useState("");
  const [list, setList] = useState<List[]>([]);

  const addTodo = () => {
    setList([
      ...list,
      {
        label: text,
      },
    ]);
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
        <button onClick={() => addTodo()}>追加</button>
      </div>
      <ul>
        {list.map((item, i) => {
          return <li key={i}>{item.label}</li>;
        })}
      </ul>
    </>
  );
}
