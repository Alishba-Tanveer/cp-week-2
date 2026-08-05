import type { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  getKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
}

function List<T>({
  items,
  getKey,
  renderItem,
}: ListProps<T>) {
  return (
    <>
      {items.map((item) => (
        <div key={getKey(item)}>
          {renderItem(item)}
        </div>
      ))}
    </>
  );
}

export default List;