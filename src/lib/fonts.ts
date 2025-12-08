import {
  Instrument_Serif as FontDisplay,
  Plus_Jakarta_Sans as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontDisplay = FontDisplay({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-display",
});
