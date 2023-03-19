import React from "react";
import Link from "next/link";
export default function SideNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <svg
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <line x1="4" y1="5" x2="24" y2="5" stroke="black" strokeWidth="2" />
        <line x1="4" y1="12" x2="14" y2="12" stroke="black" strokeWidth="2" />
        <line x1="4" y1="19" x2="20" y2="19" stroke="black" strokeWidth="2" />
      </svg>
      <div
        className={`absolute ${
          !open && "hidden"
        } w-screen lg:w-60 -left-5 lg:-left-0 lg:border-2 border-gray-200 rounded-xl h-96 py-16 items-center bg-white flex flex-col justify-between`}
      >
        <a href="#">Aksara Jawa</a>
        <a href="#">Aksara Jawa</a>
        <a href="#">Aksara Jawa</a>
        <a href="#">Aksara Jawa</a>
      </div>
    </div>
  );
}
