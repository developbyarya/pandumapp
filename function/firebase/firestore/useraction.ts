import { db } from "@/function/firebase/firestore/base";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function createUserInfo(uid: string, email: string) {
  const ref = doc(db, "users", uid);

  if ((await getDoc(ref)).exists()) {
    return;
  }

  try {
    await setDoc(ref, {
      email,
    });
  } catch (error) {
    throw error;
  }
}

export async function createUserProgress(uid: string) {
  const ref = doc(db, "user-progress", uid);

  if ((await getDoc(ref)).exists()) {
    return;
  }

  try {
    await setDoc(ref, {
      lastProgressId: -1,
    });
  } catch (error) {
    throw error;
  }
}

interface GetUserProgress {
  error?: string;
  lastProgressId?: string | number;
}
export async function getUserProgress(uid: string): Promise<GetUserProgress> {
  const ref = doc(db, "user-progress", uid);
  const progress = await getDoc(ref);

  if (!progress.exists()) return { error: "document doesn't exist!" };

  return progress.data();
}
