import type { Task, Filter } from "../types/Task";

export function getVisibleTasks(tasks: Task[], filter: Filter) {
  const filters = {
    all: () => true,
    active: (task: Task) => !task.completed,
    completed: (task: Task) => task.completed,
  };

  return tasks.filter(filters[filter]);
}

export function getCounts(tasks: Task[]) {
  const total = tasks.length;
  const active = tasks.filter(task => !task.completed).length;
  const completed = total - active;

  return {
    total,
    active,
    completed,
  };
}