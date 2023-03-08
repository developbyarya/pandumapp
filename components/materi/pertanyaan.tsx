import { Font } from "@/assets/font/font";
import { useMateri } from "@/function/context/materiContext";

export default function Pertanyaan({
  aksara,
  latin,
}: {
  aksara: string;
  latin: string;
}) {
  const materiController = useMateri();
  return (
    <div className="mb-1 h-[80vh] relative flex flex-col  items-center">
      <div className="rounded-xl bg-blue-800 justify-center  relative w-64 h-64 m-16 flex flex-col ">
        <h6 className={`${Font.className} text-white text-[98px] self-center`}>
          {aksara}
        </h6>
        <p className="text-white self-end absolute bottom-4 right-4 text-[42px]">
          {latin}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          if (materiController.value >= materiController.total) return;
          materiController.setValue((prev) => prev + 1);
        }}
        className="absolute bottom-5 bg-blue-800 w-full text-center text-white rounded-full py-3 text-lg hover:to-blue-900"
      >
        Lanjut
      </button>
    </div>
  );
}
