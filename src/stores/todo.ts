import { create } from "zustand";

interface List {
  label: string;
}

interface TodoState {
  todo: List[];
  addTodo: (task: List) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todo: [],
  addTodo: (task) => set((state) => ({ todo: [...state.todo, task] })),
  //   deleteTuna: () => set((state) => omit(state, ['tuna']), true),
}));
