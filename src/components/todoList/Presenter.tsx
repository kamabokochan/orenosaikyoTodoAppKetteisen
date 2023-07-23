"use client";

import styles from "./TodoList.module.scss";
import { Button } from "@/components/button";
import { List, TodoState } from "@/stores/todo";

type Props = {
  todo: List[];
  updateStatus: TodoState["updateStatus"];
  deleteTodo: TodoState["deleteTodo"];
};

export const Presenter = ({ todo, updateStatus, deleteTodo }: Props) => {
  return (
    <ul className={styles.list}>
      {todo.map((item, i) => {
        return (
          <li className={styles.item} key={i}>
            <p
              className={
                item.isDone
                  ? `${styles.label} ${styles.done}`
                  : `${styles.label}`
              }
              data-testid="todo-label"
            >
              {item.label}
            </p>
            <Button
              onClick={() => updateStatus(item.id)}
              color="complete"
              testId="complete-button"
            >
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
