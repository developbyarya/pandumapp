import { IconTextButton } from "@/components/button/LinkButton";
import Aksara from "@/components/typography/aksara";

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
      <div className="flex justify-between items-center py-3 px-4">
        <Aksara color="black" fontSize={12}>
          {aksara}
        </Aksara>
        <h3 className="font-bold text-lg">{title} </h3>
        <IconTextButton url={"/app/materi/" + url}>
          Mulai Sekarang
        </IconTextButton>
      </div>
    </div>
  );
}
