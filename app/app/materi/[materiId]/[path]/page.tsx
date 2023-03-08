"use client";
import Pertanyaan from "@/components/materi/pertanyaan";
import Pilihan from "@/components/materi/pilihan";
import {
  getMateri,
  Materi,
} from "@/function/firebase/firestore/materi/getMateri";
import React from "react";
import { useMateri } from "@/function/context/materiContext";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Ketik from "@/components/materi/ketik";
import Cocok from "@/components/materi/cocok";

function getMateriComponent(m: Materi) {
  switch (m.tipe) {
    case "materi":
      return (
        <Pertanyaan
          aksara={m.data.aksara}
          latin={m.data.latin}
          key={uuidv4()}
        />
      );
    case "pilihan":
      return (
        <Pilihan
          isAksara={false}
          pertanyaan={m.data.pertanyaan}
          option={m.data.option}
          kunci={m.data.kunciIndex}
          key={uuidv4()}
        />
      );
    case "pilihan_kartu":
      return (
        <Pilihan
          isAksara={true}
          pertanyaan={m.data.pertanyaan}
          option={m.data.option}
          kunci={m.data.kunciIndex}
          key={uuidv4()}
        />
      );
    case "pertanyaan-latin":
      return (
        <Pilihan
          isAksara={true}
          pertanyaan={m.data.pertanyaan}
          option={m.data.option}
          kunci={m.data.kunciIndex}
          key={uuidv4()}
        />
      );
    case "ketik":
      return (
        <Ketik
          pertanyaan={m.data.pertanyaan}
          key={uuidv4()}
          kunci={m.data.kunci}
        />
      );
    case "cocok":
      return (
        <Cocok left={m.data.left} right={m.data.right} kunci={m.data.kunci} />
      );
    case "multiaksara":
      return (
        <Pilihan
          isAksara={true}
          pertanyaan={m.data.pertanyaan}
          option={m.data.option}
          kunci={m.data.kunciIndex}
          key={uuidv4()}
        />
      );
  }
}

export default function Page({
  params: { path },
}: {
  params: { path: string };
}) {
  const materi_path = path.replace("--", "/");
  const [materis, setMateris] = React.useState<Materi[]>();
  const materiController = useMateri();
  React.useEffect(() => {
    getMateri(materi_path).then((result) => {
      setMateris(result);
      materiController.setTotal(result.length);
    });
  }, []);
  return (
    <>
      {materis &&
        materiController.value + 1 <= materiController.total &&
        getMateriComponent(materis[materiController.value])}
    </>
  );
}
