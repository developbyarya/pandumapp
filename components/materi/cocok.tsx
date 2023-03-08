import { Font } from "@/assets/font/font";
import { useMateri } from "@/function/context/materiContext";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  kunci: number[];
  left: string[];
  right: string[];
}

function all(iter: any[]): boolean {
  for (var i = 0; i < iter.length; i++) {
    if (iter[i] == -1) return false;
  }
  return true;
}

export default function Cocok({ kunci, left, right }: Props) {
  const [leftTarget, setLeftTarget] = React.useState<number | undefined>();
  const [rightTarget, setRightTarget] = React.useState<number | undefined>();
  const [completed, setCompleted] = React.useState<number[]>(
    Array(kunci.length).fill(-1)
  );
  const materiController = useMateri();
  const router = useRouter();
  return (
    <div
      style={{ height: "calc(100vh - 122px)" }}
      className="relative w-full mt-10"
    >
      <h5 className="text-2xl font-bold text-center">Cocokan</h5>
      <div
        className={`w-full ${Font.className} flex justify-between px-10 mt-5`}
      >
        <div className="flex flex-col gap-5">
          {left.map((l, index) => (
            <button
              type="button"
              className={`border-2 ${
                leftTarget == index
                  ? "border-blue-600"
                  : completed[index] !== -1
                  ? "border-green-600"
                  : "border-secondary"
              }  rounded-xl bg-white px-8 py-4 text-xl`}
              onClick={() => {
                if (rightTarget !== undefined) {
                  if (kunci[index] == rightTarget) {
                    setCompleted((prev) => {
                      prev.splice(index, 1, rightTarget);
                      return prev;
                    });
                    setRightTarget(undefined);
                    setLeftTarget(undefined);
                  } else {
                    setRightTarget(undefined);
                    setLeftTarget(undefined);
                  }
                }
                setLeftTarget(index);
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {right.map((r, index) => (
            <button
              type="button"
              className={`border-2 ${
                rightTarget == index
                  ? "border-blue-600"
                  : completed[kunci.indexOf(index)] !== -1
                  ? "border-green-600"
                  : "border-secondary"
              }  rounded-xl bg-white px-8 py-4 text-xl`}
              onClick={() => {
                setRightTarget(index);
                if (leftTarget !== undefined) {
                  if (kunci.indexOf(index) === leftTarget) {
                    setCompleted((prev) => {
                      prev.splice(leftTarget, 1, kunci.indexOf(index));
                      return prev;
                    });
                    setRightTarget(undefined);
                    setLeftTarget(undefined);
                  } else {
                    setRightTarget(undefined);
                    setLeftTarget(undefined);
                  }
                }
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`absolute p-4 bottom-0 h-40 -ml-5 self-start ${
          all(completed) && "bg-blue-200"
        } flex flex-col justify-between`}
        style={{ width: "calc(100% + 40px)" }}
      >
        <p className="font-medium text-lg!">{all(completed) && "Anda Benar"}</p>
        <button
          type="button"
          className={` ${
            all(completed) ? "bg-blue-800" : "bg-gray-500"
          } w-full text-center text-white rounded-full py-3 text-lg hover:to-blue-900`}
          onClick={() => {
            if (
              all(completed) &&
              materiController.value + 1 === materiController.total
            ) {
              router.back();
            }
            if (
              materiController.value >= materiController.total ||
              !all(completed)
            )
              return;
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
