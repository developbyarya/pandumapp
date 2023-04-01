import { IconButton } from "@/components/button/LinkButton";
import Aksara from "@/components/typography/aksara";

interface Props {
  className?: string;
  imageUrl: string;
  title: string;
  aksara: string;
  url: string;
}
export default function LearningCard(props: Props) {
  return (
    <div className={`w-52 ${props.className ?? ""}`}>
      <img
        src={props.imageUrl}
        alt={props.title}
        className="rounded-xl w-full"
      />
      <div className="flex justify-between items-center py-1  w-full">
        <div>
          <Aksara color="black" fontSize={12}>
            {props.aksara}
          </Aksara>
          <h3 className="font-bold text-lg">{props.title} </h3>
        </div>
        <IconButton url={"/app/materi/" + props.url} />
      </div>
    </div>
  );
}
