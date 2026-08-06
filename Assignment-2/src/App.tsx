import { useState } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./App.css";

import type { Task, Filter } from "./types/Task";

import {
  getVisibleTasks,
  getCounts,
} from "./utils/helpers";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  function addTask(title: string) {
    const trimmed = title.trim();

    if (!trimmed) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
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

  const visibleTasks = getVisibleTasks(tasks, filter);

  const counts = getCounts(tasks);

  return (
  <div className="app">
    <h1 className="title">Task Board</h1>

    <TaskInput onAddTask={addTask} />

    <FilterBar
      filter={filter}
      onFilterChange={setFilter}
    />

    <TaskList
      tasks={visibleTasks}
      onToggle={toggleTask}
      onDelete={deleteTask}
    />

    <div className="counts">
      <span>Total: {counts.total}</span>
      <span>Active: {counts.active}</span>
      <span>Completed: {counts.completed}</span>
    </div>
  </div>
);
}

export default App;