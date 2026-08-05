import { format } from "../utils/helpers";

interface StatCardProps {
  title: string;
  value: number;
}

function StatCard({ title, value }: StatCardProps) {
  const formattedValue = format(value);

  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <h1>{formattedValue}</h1>
    </div>
  );
}

export default StatCard;