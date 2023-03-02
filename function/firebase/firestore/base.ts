import { getFirestore } from "firebase/firestore";
import { app } from "@/function/firebase/root";

export const db = getFirestore(app);
