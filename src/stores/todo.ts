import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface List {
  label: string;
}

interface TodoState {
  todo: List[];
  addTodo: (task: List) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todo: [],
      addTodo: (task) => set({ todo: [...get().todo, task] }),
      //   deleteTuna: () => set((state) => omit(state, ['tuna']), true),
    }),
    {
      name: "todo-storage",
    }
  )
);
