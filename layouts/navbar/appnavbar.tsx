"use client";
import Logo from "@/assets/brands/Logo.png";
import IconDropdown from "@/components/dropdown/icondropdown";
import SideNav from "@/components/dropdown/sidenavbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdPersonOutline } from "react-icons/md";
export default function AppNavbar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 lg:px-36">
      <SideNav />
      <div className="w-20">
        <Image src={Logo} alt="pandum app" height={24} width={124} />
      </div>
      <div className="relative">
        <IconDropdown />
      </div>
    </nav>
  );
}
