import Head from "next/head";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Facundo Perez Montalvo | Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hey there! I'm Facundo and I'm currently looking for a new role as a developer. Hire me?"
        />
        <meta name="author" content="Facundo Perez Montalvo" />
        <meta name="author" content="Facundo" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@facuperezm" />
        <meta name="twitter:creator" content="@facuperezm" />
        <meta name="twitter:image" content="https://i.imgur.com/fjL49nC.jpg" />
        <meta property="og:site_name" content="Facundo Perez Montalvo" />
        <meta property="og:type" content="personal website" />
        <meta property="og:image" content="https://i.imgur.com/fjL49nC.jpg" />
      </Head>
      {children}
      <hr className="h-px mt-6 border-0 bg-neutral-600" />
      <Footer />
    </>
  );
};

export default Main;
