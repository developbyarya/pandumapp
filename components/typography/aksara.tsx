import { Font } from "@/app/layout";

interface Props {
  children: React.ReactNode;
  fontSize: number;
  color: string;
}
export default function Aksara(props: Props) {
  return (
    <p
      className={`${Font.className}`}
      style={{ fontSize: props.fontSize, color: props.color }}
    >
      {props.children}
    </p>
  );
}
