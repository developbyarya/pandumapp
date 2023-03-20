import { StartLearningCard } from "@/routes/app/home";
import { getCoverURL } from "@/function/firebase/storage/get_cover_url";
import { getSubMateri } from "@/function/firebase/firestore/materi/getMateri";

export const metadata = {
  title: "Pandum - Belajar Aksara Jawa",
};

export default async function MainApp() {
  const url = await getCoverURL("Materi cover.png");
  const aksaraDasar = await getSubMateri("aksara-dasar");

  return (
    <div>
      <StartLearningCard
        imageUrl={url}
        aksara={aksaraDasar.aksara as string}
        title={aksaraDasar.nama as string}
        url="aksara-dasar"
      />
    </div>
  );
}
