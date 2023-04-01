import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

export function IconTextButton({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={url}
      className="flex rounded-full items-center text-white bg-primary gap-2 p-3"
    >
      <span className="font-bold text-sm">{children}</span>
      <MdArrowRightAlt size={16} />
    </Link>
  );
}

export function IconButton({ url }: { url: string }) {
  return (
    <Link
      href={url}
      className="flex rounded-full items-center text-white bg-primary gap-2 p-3"
    >
      <MdArrowRightAlt size={16} />
    </Link>
  );
}
