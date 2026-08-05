import type { ReactNode } from "react";

interface BadgeProps {
  label: ReactNode;
  tone: "info" | "success" | "warning";
  pill?: boolean;
}

function Badge({ label, tone, pill = false }: BadgeProps) {
  const backgroundColors = {
    info: "#2196f3",
    success: "#4caf50",
    warning: "#ff9800",
  };

  return (
    <span
      style={{
        backgroundColor: backgroundColors[tone],
        color: "white",
        width: "170px",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: pill ? "30px" : "10px",
        fontWeight: 600,
        fontSize: "17px",
      }}
    >
      {label}
    </span>
  );
}

export default Badge;