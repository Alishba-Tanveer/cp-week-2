import type { Task } from "../types/Task";

type Action =
  | { type: "ADD"; title: string }
  | { type: "TOGGLE"; id: string }
  | { type: "DELETE"; id: string }
  | { type: "EDIT"; id: string; title: string };

export function taskReducer(
  state: Task[],
  action: Action
): Task[] {
  switch (action.type) {
    case "ADD": {
      const trimmed = action.title.trim();

      if (!trimmed) {
        return state;
      }

      return [
        ...state,
        {
          id: crypto.randomUUID(),
          title: trimmed,
          completed: false,
          createdAt: Date.now(),
        },
      ];
    }

    case "TOGGLE":
      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

    case "DELETE":
      return state.filter(
        task => task.id !== action.id
      );

    case "EDIT": {
      const trimmed = action.title.trim();

      if (!trimmed) {
        return state;
      }

      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              title: trimmed,
            }
          : task
      );
    }

    default:
      return state;
  }
}