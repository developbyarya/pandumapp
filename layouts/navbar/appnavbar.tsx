import Logo from "@/assets/brands/Logo.png";
import Image from "next/image";
import { MdPersonOutline, MdOutlineNotifications } from "react-icons/md";
export default function AppNavbar() {
  return (
    <nav className="flex w-full justify-between items-center">
      <svg
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer opacity-0"
      >
        <line x1="4" y1="5" x2="24" y2="5" stroke="black" strokeWidth="2" />
        <line x1="4" y1="12" x2="14" y2="12" stroke="black" strokeWidth="2" />
        <line x1="4" y1="19" x2="20" y2="19" stroke="black" strokeWidth="2" />
      </svg>
      <Image src={Logo} alt="pandum app" height={24} width={124} />
      <div className="flex gap-7 opacity-0">
        <MdOutlineNotifications color="black" size={24} />
        <MdPersonOutline color="black" size={24} />
      </div>
    </nav>
  );
}
