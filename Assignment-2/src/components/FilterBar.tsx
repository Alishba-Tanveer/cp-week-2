import type { Filter } from "../types/Task";

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function FilterBar({
  filter,
  onFilterChange,
}: FilterBarProps) {
  return (
  <div className="filters">
    <button
      onClick={() => onFilterChange("all")}
      disabled={filter === "all"}
    >
      All
    </button>

    <button
      onClick={() => onFilterChange("active")}
      disabled={filter === "active"}
    >
      Active
    </button>

    <button
      onClick={() => onFilterChange("completed")}
      disabled={filter === "completed"}
    >
      Completed
    </button>
  </div>
);
}

export default FilterBar;