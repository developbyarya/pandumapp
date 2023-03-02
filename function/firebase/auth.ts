import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "@/function/firebase/root";
import { createUserInfo, createUserProgress } from "./firestore/useraction";

export const auth = getAuth(app);

export interface AuthCredential {
  uid?: string;
  refreshToken?: string;
  email?: string | null;
}

export async function emailPasswordSignIn(userEmail: string, password: string) {
  try {
    const {
      user: { uid, refreshToken, email, emailVerified },
    } = await signInWithEmailAndPassword(auth, userEmail, password);

    await createUserInfo(uid, userEmail);
    await createUserProgress(uid);
    return { uid, refreshToken };
  } catch (error) {}
}

export async function signInWithGoogle(): Promise<
  AuthCredential | { error: any }
> {
  const provider = new GoogleAuthProvider();

  try {
    const {
      user: { uid, refreshToken, email },
    } = await signInWithPopup(auth, provider);
    createUserInfo(uid, email as string).catch((error) => {
      console.log(error);
    });
    createUserProgress(uid).catch((error) => {
      console.log(error);
    });
    return { uid, refreshToken, email };
  } catch (error) {
    return { error };
  }
}

export async function handleSignOut() {
  try {
    signOut(auth);
  } catch (error) {
    return { error };
  }
}
