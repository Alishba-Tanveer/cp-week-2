export type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: number;
  createdAt: number;
};

export type Filter = "all" | "active" | "completed";

export type SortBy = "createdAt" | "priority";