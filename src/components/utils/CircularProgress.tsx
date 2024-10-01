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
    <div className="flex flex-col items-center  gap-2">
      <div className="flex w-28">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          className="flex h-24 w-24 font-semibold"
          strokeWidth={13}
          styles={buildStyles({
            textSize: "18px",
            textColor: "#333",
            trailColor: "#e5e5e5",
            pathColor: "#e22f24",
            strokeLinecap: "butt",
          })}
        />
      </div>
      <p className="text-center font-semibold">{title}</p>
    </div>
  );
}
