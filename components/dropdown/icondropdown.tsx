import { MdPersonOutline } from "react-icons/md";
import React from "react";
import Link from "next/link";

export default function IconDropdown() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <MdPersonOutline
        color="black"
        size={24}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      <div
        className={`absolute ${
          !open && "hidden"
        } right-0 py-2 origin-top-right bg-white border-2 border-gray-600 rounded-xl`}
      >
        <Link href="/auth/signout">
          <p className="whitespace-nowrap px-4 hover:bg-gray-100">Sign Out</p>
        </Link>
      </div>{" "}
    </>
  );
}
