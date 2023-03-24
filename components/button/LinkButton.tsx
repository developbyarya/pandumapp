import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

export function IconTextButton({ url }: { url: string }) {
  return (
    <Link
      href={url}
      className="flex rounded-full items-center text-white bg-primary gap-2 p-3"
    >
      <span className="font-bold text-sm">Mulai Sekarang</span>
      <MdArrowRightAlt size={16} />
    </Link>
  );
}
