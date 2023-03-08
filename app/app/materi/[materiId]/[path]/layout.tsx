"use client";
import "../../../../globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";
import { AuthCredential } from "@/function/firebase/auth";
import { AuthProvider } from "@/function/context/authContext";
import MateriNavbar from "@/layouts/navbar/materinavbar";
import { MateriProvider } from "@/function/context/materiContext";

const NUNITO_FONT = Nunito({
  weight: ["400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

const Font = localFont({
  src: "../../../../../assets/font/nyk.ttf",
  variable: "--font-aksara",
});

export default function PathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthCredential | false>({});
  const [value, setValue] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  return (
    <html lang="en">
      <head />
      <body
        className={
          "bg-primary tracking-[8%] box-border font-nunito  pt-10 px-5 " +
          NUNITO_FONT.className
        }
      >
        <AuthProvider value={{ setUser: setUser, user }}>
          <MateriProvider value={{ total, value, setValue, setTotal }}>
            <MateriNavbar value={value + 1} total={total} />
            {children}
          </MateriProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
