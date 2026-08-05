import type { User } from "../types/User";

/* P1 */
export function initials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return "";

  if (words.length === 1) {
    return words[0][0].toUpperCase();
  }

  return (words[0][0] + words[1][0]).toUpperCase();
}

/* P3 */
export function keyFor(user: User): string {
  return user.id;
}

/* P4 */
export function classify(users: User[]) {
  const count = users.length;

  return {
    empty: count === 0,
    count,
    label:
      count === 0
        ? "No users"
        : count === 1
        ? "1 user"
        : `${count} users`,
  };
}

/* P5 */
export function format(n: number): string {
  return n.toLocaleString();
}

/* P6 */
export function groupByRole(users: User[]) {
  return users.reduce(
    (groups, user) => {
      groups[user.role].push(user);
      return groups;
    },
    {
      admin: [] as User[],
      member: [] as User[],
    }
  );
}