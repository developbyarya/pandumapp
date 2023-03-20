import { db } from "@/function/firebase/firestore/base";

import { doc, getDoc, getDocs, collection } from "firebase/firestore";

interface SubMateri {
  collection?: string;
  cover_filename?: string;
  aksara?: string;
  nama?: string;
  totalChapter?: number;
  id?: Array<string>;
  error: {
    any: boolean;
    errors?: any;
  };
}
export async function getSubMateri(materiId: string): Promise<SubMateri> {
  const ref = doc(db, "materi", materiId);
  try {
    const ids = await getDoc(ref);

    if (!ids.exists())
      return { error: { any: true, errors: "Document doesn't exist!" } };

    return { ...ids.data(), error: { any: false } };
  } catch (error) {
    return { error: { any: true, errors: error } };
  }
}

interface Materis {}

export async function getMateris(ids: string[]) {
  // refactor id into doc ref
  const refs = ids.map((id) => doc(db, "soal", id));

  // gets all ids
  const gets = await Promise.all(refs.map((ref) => getDoc(ref)));

  // gets all total chapter
  const chapters = gets.map((get) => get.data()?.chapter);

  // gets all subcollection ref

  const subcollectionrefs = refs.map((ref, index) => {
    // convert chapter
    const bagains: string[] = Array.from(
      { length: chapters[index] },
      (_, i) => i + 1
    ).map((bagian) => "bagian" + bagian);

    return bagains.map((bagian) => ({
      collection: collection(ref, bagian),
      id: ids[index],
      b: bagian,
    }));
  });

  const totalDocs = await Promise.all(
    subcollectionrefs.map(async (item) => {
      const it = Promise.all(item.map((i) => getDocs(i.collection)));

      return (await it).map((i) => i.docs.length);
    })
  );

  return subcollectionrefs
    .flat()
    .map((i, index) => ({
      ...i,
      total: totalDocs.flat()[index],
      collection: i.collection.path,
    }))
    .flat();
}

export interface Materi {
  tipe:
    | "materi"
    | "pilihan"
    | "pilihan_kartu"
    | "pertanyaan-latin"
    | "ketik"
    | "multiaksara"
    | "cocok";

  data: any;
}

export async function getMateri(path: string): Promise<Materi[]> {
  const [a, b] = path.split("/");
  const collect = collection(db, "soal", a, b);
  const snapshot = await getDocs(collect);

  return snapshot.docs.map((doc) => doc.data()) as Materi[];
}
