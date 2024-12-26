import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 2 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function Layout({ className, children, ...props }: LayoutProps) {
  return (
    <motion.div
      initial="false"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, type: "easeInOut" }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Layout;
