"use client";

import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
  order: number;
  title: string;
  value: number;
}
export default function SubMateri({ order, title, value }: Props) {
  return (
    <div className="flex flex-row w-full justify-between gap-6 ">
      <div className="w-16 h-16 bg-varians1 text-3xl text-[#2E3F4D] rounded-xl flex justify-center items-center font-extrabold">
        {order.toString()}
      </div>
      <div className="flex flex-1 gap-2 flex-col w-max">
        <p>{title}</p>
        <ProgressBar completed={value} bgColor="#0974F1" />
      </div>
    </div>
  );
}
