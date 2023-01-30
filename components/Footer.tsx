import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center text-brand-textSecondary text-sm py-3 font-serif">
      &copy; {new Date().getFullYear()} | Made with{"  "}
      <Link href="https://nextjs.org/" className="hover:underline">
        Next.js
      </Link>
      {"  "}and{"  "}
      <Link href="https://tailwindcss.com/" className="hover:underline">
        Tailwind CSS
      </Link>
      {"  "}♥
    </div>
  );
};
export default Footer;
