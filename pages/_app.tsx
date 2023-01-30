import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Hind_Siliguri, Newsreader } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import TopBlur from "@/components/TopBlur";
import Layout from "@/components/layouts/main";

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
        className={`${inter.variable} ${newsreader.variable} ${hindSiliguri.variable} bg-brand-background text-brand-textPrimary`}
      >
        <Layout>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </main>
    </>
  );
}
