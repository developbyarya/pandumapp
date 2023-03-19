import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // redirect("/app/");
  return (
    <div>
      <h1 className="text-2xl">Maaf!</h1>
      <p>Kami dalam pengembangan</p>
      <p>Follow kami di Instagram : @pandum.aksara</p>
    </div>
  );
}
