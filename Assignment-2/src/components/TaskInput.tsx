import { useState } from "react";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    if (title.trim() === "") return;

    onAddTask(title);

    setTitle("");
  }

  return (
     <div className="input-section">
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter task..."
    />

      <button onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;