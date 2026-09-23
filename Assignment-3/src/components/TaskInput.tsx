import { useState } from "react";

interface TaskInputProps {
  onAddTask: (
    title: string,
    priority: number
  ) => void;
}

function TaskInput({
  onAddTask,
}: TaskInputProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] =
    useState(3);

  function handleSubmit() {
    const trimmed = title.trim();

    if (!trimmed) {
      return;
    }

    onAddTask(trimmed, priority);

    setTitle("");
    setPriority(3);
  }

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(Number(e.target.value))
        }
      >
        <option value={1}>Priority 1</option>
        <option value={2}>Priority 2</option>
        <option value={3}>Priority 3</option>
        <option value={4}>Priority 4</option>
        <option value={5}>Priority 5</option>
      </select>

      <button onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;