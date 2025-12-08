import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

function Layout({ className, children, ...props }: LayoutProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Layout;
