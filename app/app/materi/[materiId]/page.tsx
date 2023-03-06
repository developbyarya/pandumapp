import {
  getSubMateri,
  getMateri,
} from "@/function/firebase/firestore/materi/getMateri";
import { MdBook } from "react-icons/md";
import { Font } from "@/assets/font/font";

import { Circular } from "@/components/progressbar";
import "react-circular-progressbar/dist/styles.css";
import SubMateri from "./submateri";

export default async function Page({
  params,
}: {
  params: { materiId?: string };
}) {
  if (!params?.materiId) return <>Error</>;

  const subMateri = await getSubMateri(params?.materiId as string);
  const materis = await getMateri(subMateri.id as string[]);

  return (
    <div className="mt-14">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-secondary">Aksara Jawa</p>
          <p className="font-bold text-2xl">{subMateri.nama}</p>
          <div className="flex flex-row text-secondary">
            <p className={`${Font.className}`}>{subMateri.aksara}</p>
            <MdBook size={16} />
            <p className="">{subMateri.totalChapter} Chapter</p>
          </div>
        </div>
        <Circular className="w-10" value={75} />
      </div>
      <div className="mt-8 flex flex-col gap-5">
        {materis.map((materi, index) => (
          <SubMateri
            order={index + 1}
            title={"Aksara Dasar " + index.toString()}
            value={0}
          />
        ))}
      </div>
    </div>
  );
}
