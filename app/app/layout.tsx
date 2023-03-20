"use client";
import "../globals.css";
import localFont from "next/font/local";
import { useState } from "react";
import { AuthCredential } from "@/function/firebase/auth";
import { AuthProvider } from "@/function/context/authContext";
import AppNavbar from "@/layouts/navbar/appnavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthCredential | false>({});
  return (
    <div style={{ minHeight: "100vh" }}>
      <AuthProvider value={{ setUser: setUser, user }}>
        <AppNavbar />

        <div className="px-5 lg:px-36">{children}</div>
      </AuthProvider>
    </div>
  );
}
