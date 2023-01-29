import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Hind_Siliguri, Newsreader } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import TopBlur from "@/components/TopBlur";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-hind-siliguri",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--font-newsreader",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBlur />
      <main
        className={`${inter.variable} ${newsreader.variable} font-sans ${hindSiliguri.variable} text-[#fff] bg-[#1b1b1b]`}
      >
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
