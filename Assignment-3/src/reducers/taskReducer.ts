import type { Task } from "../types/Task";

export type TaskAction =
  | {
      type: "ADD";
      title: string;
      priority: number;
    }
  | {
      type: "TOGGLE";
      id: string;
    }
  | {
      type: "DELETE";
      id: string;
    }
  | {
      type: "EDIT";
      id: string;
      title: string;
    };

export function taskReducer(
  state: Task[],
  action: TaskAction
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
          priority: action.priority,
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