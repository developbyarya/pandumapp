"use client";
import "../../globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";
import { AuthCredential } from "@/function/firebase/auth";
import { AuthProvider } from "@/function/context/authContext";
import AppNavbar from "@/layouts/navbar/appnavbar";

const NUNITO_FONT = Nunito({
  weight: ["400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

const Font = localFont({
  src: "../../../assets/font/nyk.ttf",
  variable: "--font-aksara",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthCredential | false>({});
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={
          "bg-primary tracking-[8%] box-border font-nunito  pt-10 px-5 " +
          NUNITO_FONT.className
        }
      >
        <AuthProvider value={{ setUser: setUser, user }}>
          <AppNavbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
