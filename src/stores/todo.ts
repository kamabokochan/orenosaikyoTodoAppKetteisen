import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export interface List {
  id: string;
  label: string;
  isDone: boolean;
}

interface TodoState {
  todo: List[];
  addTodo: (label: List["label"]) => void;
  updateStatus: (id: List["id"]) => void;
  deleteTodo: (id: List["id"]) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todo: [],
      addTodo: (label) =>
        set({
          todo: [
            ...get().todo,
            {
              id: nanoid(),
              label: label,
              isDone: false,
            },
          ],
        }),
      updateStatus: (id) => {
        const newList = [...get().todo].map((list) => {
          if (list.id === id) {
            return {
              ...list,
              isDone: !list.isDone,
            };
          }
          return list;
        });
        set({ todo: newList });
      },
      deleteTodo: (id) => {
        const newList = [...get().todo].filter((list) => list.id !== id);
        set({ todo: newList });
      },
    }),
    {
      name: "todo-storage",
    }
  )
);
