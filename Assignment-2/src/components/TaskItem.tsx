import type { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
  <li className="task-item">
    <span
      className={`task-title ${
        task.completed ? "completed" : ""
      }`}
      onClick={() => onToggle(task.id)}
    >
      {task.title}
    </span>

    <button
      className="delete-btn"
      onClick={() => onDelete(task.id)}
    >
      Delete
    </button>
  </li>
);
}

export default TaskItem;