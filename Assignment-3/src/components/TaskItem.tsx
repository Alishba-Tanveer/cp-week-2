import {
  useEffect,
  useRef,
  useState,
} from "react";

import type { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle(id: string): void;
  onDelete(id: string): void;
  onEdit(
    id: string,
    title: string
  ): void;
}

function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
}: TaskItemProps) {
  const [editing, setEditing] =
    useState(false);

  const [draft, setDraft] =
    useState(task.title);

  const inputRef =
    useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  function save() {
    const trimmed = draft.trim();

    if (!trimmed) {
      setDraft(task.title);
      setEditing(false);
      return;
    }

    onEdit(task.id, trimmed);
    setEditing(false);
  }

  function cancel() {
    setDraft(task.title);
    setEditing(false);
  }

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          onToggle(task.id)
        }
      />

      {editing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) =>
            setDraft(e.target.value)
          }
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              save();

            if (e.key === "Escape")
              cancel();
          }}
        />
      ) : (
        <span
          onDoubleClick={() =>
            setEditing(true)
          }
          style={{
            flex: 1,
            cursor: "pointer",
            textDecoration:
              task.completed
                ? "line-through"
                : "none",
          }}
        >
          {task.title}
          {" | "}
          Priority:
          {task.priority}
        </span>
      )}

      <button
        onClick={() =>
          onDelete(task.id)
        }
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;