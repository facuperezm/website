"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface LayoutProps extends HTMLMotionProps<"main"> {
  className?: string;
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 2 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function Layout({ className, children, ...motionProps }: LayoutProps) {
  const shouldReduceMotion = useReducedMotion();

  const appliedVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, enter: { opacity: 1 }, exit: { opacity: 0 } }
    : variants;

  const appliedTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, type: "easeInOut" };

  return (
    <motion.main
      initial="false"
      animate="enter"
      exit="exit"
      variants={appliedVariants}
      transition={appliedTransition}
      {...motionProps}
      className={cn("relative", className)}
    >
      {children}
    </motion.main>
  );
}

export default Layout;
