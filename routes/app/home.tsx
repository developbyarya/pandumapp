"use client";
import React from "react";
import Image from "next/image";
import LearningBackground from "@/assets/demo/learning-background.png";
import SandhanganBackground from "@/assets/demo/sandangan-bg.png";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAuth } from "@/function/context/authContext";
import { auth } from "@/function/firebase/auth";
import { getUserProgress } from "@/function/firebase/firestore/useraction";
import Link from "next/link";

export default function MainApp() {
  const authCred = useAuth();
  const [nextProgress, setNextProgress] = React.useState<{
    status: boolean;
    id?: string;
  }>({ status: false });
  React.useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        authCred.setUser(user);
        const lastProgress = await getUserProgress(user.uid);
        if (lastProgress?.lastProgressId !== -1)
          setNextProgress({
            status: true,
            id: lastProgress?.lastProgressId as string,
          });
      } else {
        authCred.setUser(false);
      }
    });
  }, []);
  return <div></div>;
}
