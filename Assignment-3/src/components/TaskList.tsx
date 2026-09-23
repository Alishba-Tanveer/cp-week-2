import TaskItem from "./TaskItem";

import type { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  onToggle(id: string): void;
  onDelete(id: string): void;
  onEdit(
    id: string,
    title: string
  ): void;
}

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;