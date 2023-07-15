"use client";

import styles from "./TodoList.module.scss";
import { useTodoStore } from "@/stores/todo";
import { Button } from "@/components/button";
import useStore from "@/hooks/useStore";

export const TodoList = () => {
  // zustandの永続化におけるNextの対応
  // docs: https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#usage-in-nextjs
  // Zustandが待機するため、useStoreからundifinedが返った場合に、空配列を代入
  // TODO: todoがList[]型だが、undifinedの可能性を暗黙的に持っているため対応する
  const todo = useStore(useTodoStore, (state) => state.todo) || [];
  const { updateStatus, deleteTodo } = useTodoStore();

  return (
    <ul className={styles.list}>
      {todo.map((item, i) => {
        return (
          <li className={styles.item}>
            <p
              className={
                item.isDone
                  ? `${styles.label} ${styles.done}`
                  : `${styles.label}`
              }
            >
              {item.label}
            </p>
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
  );
};
