"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

type CircularProgressProps = {
  title: string;
  value: number;
};

export default function CircularProgress({
  title,
  value,
}: CircularProgressProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-28">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          className="font-semibold"
          strokeWidth={12}
          styles={buildStyles({
            textSize: "18px",
            textColor: "#333",
            trailColor: "#e5e5e5",
            pathColor: "#f54141",
            strokeLinecap: "butt",
          })}
        />
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}
