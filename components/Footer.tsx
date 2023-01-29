import Link from "next/link";

const Footer = () => {
  return (
    <div className="align-center opacity-5 text-sm pt-3">
      &copy; {new Date().getFullYear()} | Made with{" "}
      <Link href="https://nextjs.org/">Next.js</Link> ♥
    </div>
  );
};
export default Footer;
