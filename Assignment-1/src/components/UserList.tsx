import Avatar from "./Avatar";
import type { User } from "../types/User";
import { keyFor } from "../utils/helpers";

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  const isEmpty = users.length === 0;

  if (isEmpty) {
    return <p>No users found.</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <Avatar
          key={keyFor(user)}
          name={user.name}
          image={user.image}
        />
      ))}
    </div>
  );
}

export default UserList;