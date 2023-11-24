import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 2 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

function Layout({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, type: "easeInOut" }}
      style={{ position: "relative" }}
      className={className}
    >
      {children}
    </motion.main>
  );
}

export default Layout;
