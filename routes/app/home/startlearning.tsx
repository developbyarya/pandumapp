import { Font } from "@/assets/font/font";
import { IconTextButton } from "@/components/button/LinkButton";

interface Props {
  aksara: string;
  title: string;
  url: string;
  imageUrl: string;
}
export default function StartLearningCard({
  imageUrl,
  aksara,
  title,
  url,
}: Props) {
  return (
    <div className="w-full border-2 border-gray-100 rounded-xl">
      <img src={imageUrl} alt="Aksra dasar" />
      <div className="flex justify-between items-center">
        <h6 className={"font-jawa"}>{aksara}</h6>
        <h3 className="font-bold text-xl">{title} </h3>
        <IconTextButton url={url} />
      </div>
    </div>
  );
}
