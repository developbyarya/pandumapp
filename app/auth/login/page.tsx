import "./login.css";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/brands/Logo.png";
import MainLogin from "./mainlogin";

export default function Login() {
  return (
    <div className="relative inline-block flex-center flex-col">
      <Image src={Logo} width={128} height={42} alt="pandum logo"></Image>

      <h1 className="text-3xl font-bold tracking-[8%] mt-11 mb-12">Login</h1>
      <MainLogin />
    </div>
  );
}
