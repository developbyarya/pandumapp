import {
  getSubMateri,
  getMateris,
} from "@/function/firebase/firestore/materi/getMateri";
import { MdBook } from "react-icons/md";
import { Font } from "@/assets/font/font";

import { Circular } from "@/components/progressbar";
import "react-circular-progressbar/dist/styles.css";
import SubMateri from "./submateri";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { materiId?: string };
}) {
  if (!params?.materiId) return <>Error</>;

  const subMateri = await getSubMateri(params?.materiId as string);
  const materis = await getMateris(subMateri.id as string[]);
  console.log(materis);

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
          <Link
            href={`/app/materi/${params.materiId}/${materi.id}--${materi.b}`}
          >
            <SubMateri
              order={index + 1}
              title={"Aksara Dasar " + (index + 1).toString()}
              value={0}
              key={uuidv4()}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
