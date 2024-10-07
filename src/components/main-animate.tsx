"use client";

import { motion, useReducedMotion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 2 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function Layout({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const appliedVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, enter: { opacity: 1 }, exit: { opacity: 0 } }
    : variants;

  const appliedTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, type: "easeInOut" };

  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={appliedVariants}
      transition={appliedTransition}
      style={{ position: "relative" }}
      className={className}
    >
      {children}
    </motion.main>
  );
}

export default Layout;
