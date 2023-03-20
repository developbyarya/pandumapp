import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

export function IconTextButton({ url }: { url: string }) {
  return (
    <Link href={url} className="flex rounded-full text-white bg-primary">
      <span>Mulai Sekarang</span>
      <MdArrowRightAlt />
    </Link>
  );
}
