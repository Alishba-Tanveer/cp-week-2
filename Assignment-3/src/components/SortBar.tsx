import type { SortBy } from "../types/Task";

interface SortBarProps {
  sortBy: SortBy;
  onSortChange: (
    sort: SortBy
  ) => void;
}

function SortBar({
  sortBy,
  onSortChange,
}: SortBarProps) {
  return (
    <div className="sort-bar">
      <label>Sort By:</label>

      <select
        value={sortBy}
        onChange={(e) =>
          onSortChange(
            e.target.value as SortBy
          )
        }
      >
        <option value="createdAt">
          Created Time
        </option>

        <option value="priority">
          Priority
        </option>
      </select>
    </div>
  );
}

export default SortBar;