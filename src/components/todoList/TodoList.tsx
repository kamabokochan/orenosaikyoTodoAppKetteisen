"use client";

import { Presenter } from "./Presenter";
import { useTodoStore } from "@/stores/todo";
import useStore from "@/hooks/useStore";

export const TodoList = () => {
  // zustandの永続化におけるNextの対応
  // docs: https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#usage-in-nextjs
  // Zustandが待機するため、useStoreからundifinedが返った場合に、空配列を代入
  // TODO: todoがList[]型だが、undifinedの可能性を暗黙的に持っているため対応する
  const todo = useStore(useTodoStore, (state) => state.todo) || [];
  const { updateStatus, deleteTodo } = useTodoStore();
  const props = {
    todo,
    updateStatus,
    deleteTodo,
  };
  return <Presenter {...props} />;
};
