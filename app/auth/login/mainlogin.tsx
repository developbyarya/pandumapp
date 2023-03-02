"use client";
import GoogleSignIn from "./googleLogin";
import Form from "./form";
import React from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/function/firebase/auth";
import { Circles } from "react-loader-spinner";
export default function MainLogin() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const router = useRouter();
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/app");
      } else {
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);
  return isLoading ? (
    <Circles color="#2974AF" height={20} />
  ) : (
    <div className="border-primary border-2 w-full rounded-xl px-5 py-9">
      <Form />

      <div className="relative mt-12 flex flex-center justify-center">
        <div className="w-full border-[1px] border-[#A9AEB3]"></div>
        <p className="absolute bg-primary px-2 text-overlay">Atau</p>
      </div>

      <GoogleSignIn />
    </div>
  );
}
