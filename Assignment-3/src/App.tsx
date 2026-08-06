import { useEffect, useMemo, useState } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import TaskList from "./components/TaskList";

import { useLocalStorage } from "./hooks/useLocalStorage";

import {
  clearCompleted,
  getCounts,
  getVisibleTasks,
  sortTasks,
  titleSummary,
} from "./utils/helpers";

import type { Filter, SortBy, Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(
    "tasks",
    []
  );

  const [filter, setFilter] =
    useState<Filter>("all");

  const [sortBy, setSortBy] =
    useState<SortBy>("createdAt");

  function addTask(
    title: string,
    priority: number
  ) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      priority,
      createdAt: Date.now(),
    };

    setTasks(prev => [...prev, newTask]);
  }

  function toggleTask(id: string) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks(prev =>
      prev.filter(task => task.id !== id)
    );
  }

  function editTask(
    id: string,
    title: string
  ) {
    const trimmed = title.trim();

    if (!trimmed) return;

    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              title: trimmed,
            }
          : task
      )
    );
  }

  function handleClearCompleted() {
    setTasks(prev => clearCompleted(prev));
  }

  const visibleTasks = useMemo(() => {
    return sortTasks(
      getVisibleTasks(tasks, filter),
      sortBy
    );
  }, [tasks, filter, sortBy]);

  const counts = useMemo(
    () => getCounts(tasks),
    [tasks]
  );

  useEffect(() => {
    document.title = titleSummary(tasks);
  }, [tasks]);

  return (
    <div className="app">
      <h1 className="title">
        Task Board
      </h1>

      <TaskInput onAddTask={addTask} />

      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
      />

      <SortBar
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <TaskList
        tasks={visibleTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />

      <button
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>

      <div className="counts">
        <span>
          Total: {counts.total}
        </span>

        <span>
          Active: {counts.active}
        </span>

        <span>
          Completed: {counts.completed}
        </span>
      </div>
    </div>
  );
}

export default App;