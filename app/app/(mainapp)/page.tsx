import { LearningCard, StartLearningCard } from "@/routes/app/home";
import { getCoverURL } from "@/function/firebase/storage/get_cover_url";
import { getSubMateri } from "@/function/firebase/firestore/materi/getMateri";

export const metadata = {
  title: "Pandum - Belajar Aksara Jawa",
};

export default async function MainApp() {
  const url = await getCoverURL("Materi cover.png");
  const aksaraDasar = await getSubMateri("aksara-dasar");

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-xl font-bold mt-10 mb-5">Mulai Belajar, Yuk!</h1>
        <StartLearningCard
          imageUrl={url}
          aksara={aksaraDasar.aksara as string}
          title={aksaraDasar.nama as string}
          url="aksara-dasar"
        />
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold">Belajar Aksara Jawa lengkap</h3>
        <LearningCard
          title="Pasangan"
          aksara="ꦥꦱꦔꦤ꧀"
          url="pasangan"
          imageUrl={url}
          className=""
        />
      </div>
    </div>
  );
}
