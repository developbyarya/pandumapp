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
  return (
    <div className="mt-16">
      <div>
        <p className="font-bold text-xl">
          {nextProgress.status ? "Lanjutkan Belajar" : "Mulai Belajar, Yuk"}
        </p>
        <div className="w-full  h-48 rounded-xl relative overflow-hidden mt-3">
          <div className="learning-card h-full w-full absolute -z-10"></div>
          <Image
            src={LearningBackground}
            alt=""
            width={200}
            height={100}
            className="learning-background opacity-60"
          ></Image>
          <div className="z-50 px-5 py-7 h-full flex-col flex justify-between">
            <div>
              <p className="text-secondary text-base font-medium">
                Aksara Jawa
              </p>
              <h5 className="text-xl font-bold">Aksara Jawa Dasar</h5>
              <h6 className="text-sm">ꦔ꧀ꦊꦒꦼꦤ</h6>
            </div>

            <button
              type="button"
              className="rounded-full text-white px-7 py-2 self-start bg-btnGradPrimary"
            >
              Mulai Belajar
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 flex w-full justify-between items-center">
        <h6 className="font-bold text-2xl ">Pelajari Materi</h6>
        <Link className="text-base text-info" href={"/app/materi/"}>
          Lihat Semua
        </Link>
      </div>
      <div className=" whitespace-nowrap w-full overflow-x-scroll">
        <div className="first:ml-auto overflow-x-scroll  mt-11 inline-flex gap-5 items-stretch shrink-0">
          <Link href={"/app/materi/pasangan"}>
            <div className="w-64 h-40 relative rounded-xl">
              <div className="learning-card2 h-full w-full absolute rounded-xl -z-10"></div>
              <Image
                src={SandhanganBackground}
                alt=""
                width={200}
                height={100}
                className="learning-background opacity-"
              ></Image>
              <div className="z-50 px-5 py-7 h-full w-full flex items-end justify-between">
                <div>
                  <p className="text-secondary text-sm font-medium">
                    Aksara Jawa
                  </p>
                  <h5 className="text-xl font-bold">Pasangan</h5>
                </div>
                <p className="text-xs">7 Materi</p>
              </div>
            </div>
          </Link>

          <div className="w-64 h-40 relative rounded-xl">
            <div className="bg-gray-300 h-full w-full absolute rounded-xl -z-10"></div>
            <Image
              src={SandhanganBackground}
              alt=""
              width={200}
              height={100}
              className="learning-background opacity-"
            ></Image>
            <div className="z-50 px-5 py-7 h-full w-full flex items-end justify-between">
              <div>
                <p className="text-secondary text-sm font-medium">
                  Aksara Jawa
                </p>
                <h5 className="text-xl font-bold">Sandhangan</h5>
              </div>
              <p className="text-xs">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
