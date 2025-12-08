import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  id?: string;
};

function Section({ id, className, children, delay = 0 }: Props) {
  return (
    <motion.section
      id={id}
      data-section={id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn("mb-16", className)}
    >
      {children}
    </motion.section>
  );
}

export default Section;
