"use client";
import { Font } from "@/assets/font/font";
import { useMateri } from "@/function/context/materiContext";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  pertanyaan: string;
  isAksara: boolean;
  option: string[];
  kunci: number;
}
export default function Pilihan({
  pertanyaan,
  isAksara = false,
  option,
  kunci,
}: Props) {
  const [target, setTarget] = React.useState<false | number>(false);
  const [allowNext, setAllowNext] = React.useState<boolean>(false);
  const [completed, setcompleted] = React.useState<boolean>(false);
  const [correct, setcorrect] = React.useState<boolean | undefined>(undefined);
  const materiController = useMateri();
  const router = useRouter();
  return (
    <div
      className="relative pt-16 flex flex-col items-center"
      style={{ height: "100vh" }}
    >
      {isAksara ? (
        <div className="rounded-xl bg-blue-800 justify-center  relative px-8 py-10 mt-10 flex flex-col overflow-x-hidden">
          <h6
            className={`${Font.className} text-white ${
              pertanyaan.length == 1 ? "text-[98px]" : "text-[64px]"
            } self-center`}
          >
            {pertanyaan}
          </h6>
        </div>
      ) : (
        <p className="text-center my-10 text-xl">{pertanyaan}</p>
      )}
      <div className="w-full grid grid-cols-2 justify-between justify-items-center mb-10 mt-10">
        {option.map((opsi, index) => (
          <button
            onClick={() => {
              if (completed) return;
              setTarget(index);
              setAllowNext(true);
            }}
            className={`rounded-xl border-2 ${
              target !== false && index == target
                ? completed
                  ? correct
                    ? "border-green-600"
                    : "border-red-600"
                  : "border-blue-700"
                : "border-secondary"
            } cursor-pointer bg-white justify-center  relative w-32 h-32 flex flex-col `}
          >
            <h6
              className={`${
                !isAksara ? "text-[72px]" : "text-[32px]"
              } self-center ${isAksara && Font.className}`}
            >
              {opsi}
            </h6>
          </button>
        ))}
      </div>
      <div
        className={`absolute p-4 bottom-0 h-40 -ml-5 self-start ${
          completed && "bg-blue-200"
        } flex flex-col justify-between`}
        style={{ width: "calc(100% + 40px)" }}
      >
        <p className="font-medium text-lg!">
          {completed && (correct ? "Anda Benar" : "Anda Salah")}
        </p>
        <button
          type="button"
          className={` ${
            allowNext ? "bg-blue-800" : "bg-gray-500"
          } w-full text-center text-white rounded-full py-3 text-lg hover:to-blue-900`}
          onClick={() => {
            if (
              completed &&
              materiController.value + 1 === materiController.total
            ) {
              router.back();
            }
            if (materiController.value >= materiController.total || !allowNext)
              return;
            if (correct == undefined) {
              setcorrect(target == kunci);
              setcompleted(true);
              return;
            }
            materiController.value + 1 <= materiController.total &&
              materiController.setValue((prev) => prev + 1);
          }}
        >
          {completed
            ? materiController.value + 1 === materiController.total
              ? "Selesai"
              : "Lanjut"
            : "Check"}
        </button>
      </div>
    </div>
  );
}
