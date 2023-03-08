import Link from "next/link";
import { MdArrowLeft } from "react-icons/md";
export default function BackButton({ to }: { to: string }) {
  return (
    <Link href={to} className="flex gap-1 items-center">
      <MdArrowLeft size={24} />
      <span className="text-sm">Back</span>
    </Link>
  );
}
