import { storage } from "./base";
import { ref, getDownloadURL } from "firebase/storage";

export async function getCoverURL(filename: string) {
  const url = await getDownloadURL(
    ref(storage, "assets/materi_background/" + filename)
  );

  return url;
}
