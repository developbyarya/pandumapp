import { getStorage } from "firebase/storage";
import { app } from "@/function/firebase/root";

const storage = getStorage(app);

export { storage };
