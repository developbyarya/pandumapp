"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface Props {
  className: string;
  value: number;
}
export function Circular({ className, value }: Props) {
  console.log(value);

  return (
    <div className={className}>
      <CircularProgressbar
        value={value}
        text={value + "%"}
        strokeWidth={12}
        className="text-sm"
        styles={buildStyles({ textSize: 20 })}
      />
    </div>
  );
}
