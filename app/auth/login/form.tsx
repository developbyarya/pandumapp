"use client";
import Link from "next/link";
import { MdAlternateEmail, MdVpnKey } from "react-icons/md";
import { Circles } from "react-loader-spinner";
import { emailPasswordSignIn, auth } from "@/function/firebase/auth";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

function handleSubmit(e: any) {
  const form = new FormData(e.target);
  console.log(form.get("username"));
  emailPasswordSignIn(
    form.get("username") as string,
    form.get("password") as string
  );
}
export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoading(true);
        handleSubmit(e);
      }}
      className="w-full relative"
    >
      <div className="form-el w-full relative">
        <label htmlFor="username-login" className="text-base mb-4">
          Email
        </label>
        <div className="relative w-full flex flex-center ">
          <MdAlternateEmail className="absolute ml-5" />

          <input
            type="text"
            name="username"
            id="uesrname-login"
            className="border-black rounded-full w-full bg-transparent border-2 h-11 pl-10 "
            placeholder="example@domain.com"
            required
          />
        </div>
      </div>
      <div className="form-el w-full relative mt-7">
        <label htmlFor="password-login" className="text-base mb-4">
          Password
        </label>
        <div className="relative w-full flex flex-center ">
          <MdVpnKey className="absolute ml-5" />

          <input
            type="password"
            name="password"
            id="password-login"
            className="border-black rounded-full w-full bg-transparent border-2 h-11 pl-10 "
            placeholder="sandirahasia123"
            required
          />
        </div>
        <Link
          href={"/auth/forgot"}
          className="self-end text-sm text-overlay mt-2"
        >
          Lupa password?
        </Link>
      </div>
      <button
        type="submit"
        className="bg-buttonPrimary text-white py-4 rounded-full text-base font-semibold tracking-[8%] mt-8 w-full flex-center justify-center"
      >
        {isLoading ? (
          <div className="text-white">
            <Circles color="white" height={16} />
          </div>
        ) : (
          "Login"
        )}
      </button>
      <p className="text-base text-overlay mt-8">Belum Punya Akun?</p>
      <Link
        href={"/auth/register"}
        className="border-buttonPrimary border-2 text-buttonPrimary block  py-4 rounded-full text-base font-semibold  mt-3  w-full text-center"
      >
        Buat Akun
      </Link>
    </form>
  );
}
