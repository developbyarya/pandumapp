"use client";
import "../../globals.css";
import localFont from "next/font/local";
import { useState } from "react";
import { AuthCredential } from "@/function/firebase/auth";
import { AuthProvider } from "@/function/context/authContext";
import AppNavbar from "@/layouts/navbar/appnavbar";

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
          "bg-primary tracking-[8%] box-border font-nunito  pt-10 px-5 "
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
