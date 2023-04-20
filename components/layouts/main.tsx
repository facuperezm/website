import Head from "next/head";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Facundo Perez Montalvo - Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I'm a frontend developer with experience in React, Next.js, and Tailwind CSS. Currently seeking new opportunities."
        />
        <meta
          name="keywords"
          content="Facundo Perez Montalvo, developer, react, next.js, tailwind css, frontend developer, software development, vercel"
        />
        <meta name="author" content="Facundo Perez Montalvo" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@facuperezm" />
        <meta name="twitter:creator" content="@facuperezm" />
        <meta
          name="twitter:title"
          content="Facundo Perez Montalvo - Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="I'm a frontend developer with experience in React, Next.js, and Tailwind CSS. Currently seeking new opportunities."
        />
        <meta name="twitter:image" content="https://i.imgur.com/kuQHDfm.jpg" />
        {/* <!-- Open Graph --> */}
        <meta property="og:site_name" content="Facundo Perez Montalvo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Facundo Perez Montalvo - Frontend Developer"
        />
        <meta
          property="og:description"
          content="I'm a frontend developer with experience in React, Next.js, and Tailwind CSS. Currently seeking new opportunities."
        />
        <meta property="og:url" content="https://facuperezm.vercel.app" />
        <meta property="og:image" content="https://i.imgur.com/fjL49nC.jpg" />
        <meta
          property="og:image:secure_url"
          content="https://i.imgur.com/fjL49nC.jpg"
        />
        <meta property="og:image:alt" content="Facundo Perez Montalvo" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      {children}
      <hr className="h-px mt-6 border-0 bg-neutral-600" />
      <Footer />
    </>
  );
};

export default Main;
