import "./globals.css";
import { Nunito, Nunito_Sans } from "@next/font/google";

const NUNITO_FONT = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-primary tracking-[8%] box-border font-nunito pt-10 px-5">
        {children}
      </body>
    </html>
  );
}
