"use client";
import Pertanyaan from "@/components/materi/pertanyaan";
import {
  getMateri,
  Materi,
} from "@/function/firebase/firestore/materi/getMateri";
import React from "react";

export default function Page({
  params: { path },
}: {
  params: { path: string };
}) {
  const materi_path = path.replace("--", "/");
  const [materis, setMateris] = React.useState<Materi[]>();
  React.useEffect(() => {
    getMateri(materi_path).then((result) => {
      setMateris(result);
    });
  }, []);

  return (
    <>
      {materis &&
        materis.map((m) => {
          switch (m.tipe) {
            case "materi":
              return <Pertanyaan aksara={m.data.aksara} latin={m.data.latin} />;
            case "pilihan":
              return;
            case "pilihan_kartu":
              return;
          }
        })}
    </>
  );
}
