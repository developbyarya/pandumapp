import "./globals.css";
import { Nunito, Nunito_Sans } from "@next/font/google";
import localFont from "next/font/local";

const NUNITO_FONT = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  subsets: ["latin"],
});
const Font = localFont({
  src: "./nyk.ttf",
  variable: "--font-jawa",
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={``}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${NUNITO_FONT.variable} ${Font.variable} bg-white tracking-[8%] box-border font-nunito pt-10`}
      >
        {children}
      </body>
    </html>
  );
}

export { Font };
