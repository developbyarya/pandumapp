import { Font } from "@/assets/font/font";
import { useMateri } from "@/function/context/materiContext";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  pertanyaan: string;
  kunci: string;
}
export default function Ketik({ pertanyaan, kunci }: Props) {
  const materiController = useMateri();
  const [answer, setAnswer] = React.useState<string>("");
  const [allowNext, setAllowNext] = React.useState<boolean>(false);
  const [completed, setcompleted] = React.useState<boolean>(false);
  const [correct, setcorrect] = React.useState<boolean | undefined>(undefined);
  const router = useRouter();
  return (
    <div
      className="mb-1 relative flex flex-col  items-center"
      style={{ height: "calc(100vh - 122px)" }}
    >
      <div className="rounded-xl bg-blue-800 justify-center  relative w-44 h-44 m-12 flex flex-col ">
        <h6 className={`${Font.className} text-white text-[98px] self-center`}>
          {pertanyaan}
        </h6>
      </div>
      <input
        type="text"
        disabled={completed}
        onChange={(e) => {
          if (e.target.value !== "") {
            setAllowNext(true);
          } else {
            setAllowNext(false);
          }
          setAnswer(e.target.value);
        }}
        className="border-2 border-secondary rounded-xl px-2 py-4 text-xl w-4/5"
      />
      <div
        className={`fixed pb-4 px-5 bottom-0 h-40 -ml-10 self-start ${
          completed && "bg-blue-200"
        } ${answer.length > 0 ? "flex" : "hidden"} flex-col justify-between`}
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
              setcorrect(answer.trim().toLowerCase() == kunci);
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
