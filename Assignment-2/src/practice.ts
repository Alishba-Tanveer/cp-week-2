type Task = {
  id: string;
  title?: string;
  completed: boolean;
  createdAt?: number;
};

type Filter = "all" | "active" | "completed";

//P1 - Toggle Task

export function toggleAt(tasks: Task[], id: string): Task[] {
  return tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );
}

//P2 - Add Task

export function addTask(tasks: Task[], title: string): Task[] {
  const trimmed = title.trim();

  if (!trimmed) {
    return tasks;
  }

  return [
    ...tasks,
    {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    },
  ];
}

//P3 - Remove Task

export function removeAt(tasks: Task[], id: string): Task[] {
  const filtered = tasks.filter(task => task.id !== id);

  return filtered.length === tasks.length
    ? tasks
    : filtered;
}

//P4 - Visible Tasks

export function visible(tasks: Task[], filter: Filter): Task[] {
  const predicates = {
    all: () => true,
    active: (task: Task) => !task.completed,
    completed: (task: Task) => task.completed,
  };

  return tasks.filter(predicates[filter]);
}

//P5 - Task Counts

export function counts(tasks: Task[]) {
  const total = tasks.length;
  const active = tasks.filter(task => !task.completed).length;
  const completed = total - active;

  return {
    total,
    active,
    completed,
  };
}

//P6 - Edit Title

export function editTitle(
  tasks: Task[],
  id: string,
  next: string
): Task[] {
  const trimmed = next.trim();

  if (!trimmed) {
    return tasks;
  }

  const current = tasks.find(task => task.id === id);

  if (!current || current.title === trimmed) {
    return tasks;
  }

  return tasks.map(task =>
    task.id === id
      ? {
          ...task,
          title: trimmed,
        }
      : task
  );
}


//P7 - Controlled Input Example

/*
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

Why can't an uncontrolled input enforce the trim/reject rule?

Because React does not control the current value of an uncontrolled
input, so it cannot reliably validate, trim, reject empty input,
or clear the field after a successful add.
*/