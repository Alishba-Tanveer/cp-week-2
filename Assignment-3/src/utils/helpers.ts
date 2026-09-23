import type { Task, Filter, SortBy } from "../types/Task";

export function getVisibleTasks(
  tasks: Task[],
  filter: Filter
): Task[] {
  const predicates = {
    all: () => true,
    active: (task: Task) => !task.completed,
    completed: (task: Task) => task.completed,
  };

  return tasks.filter(predicates[filter]);
}

export function sortTasks(
  tasks: Task[],
  sortBy: SortBy
): Task[] {
  const sorted = [...tasks];

  if (sortBy === "priority") {
    sorted.sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }

      // Tie-breaker: newer tasks first
      return b.createdAt - a.createdAt;
    });
  } else {
    sorted.sort((a, b) => b.createdAt - a.createdAt);
  }

  return sorted;
}

export function getCounts(tasks: Task[]) {
  const total = tasks.length;

  const active = tasks.filter(
    task => !task.completed
  ).length;

  const completed = total - active;

  return {
    total,
    active,
    completed,
  };
}

export function clearCompleted(
  tasks: Task[]
): Task[] {
  return tasks.filter(task => !task.completed);
}

export function titleSummary(
  tasks: Task[]
): string {
  const active = tasks.filter(
    task => !task.completed
  ).length;

  return `(${active} active) Task Board`;
}