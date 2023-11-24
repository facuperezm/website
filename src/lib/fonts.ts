import { Lato as FontSans, Newsreader as FontSerif } from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSerif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  adjustFontFallback: false,
  variable: "--font-serif",
});
