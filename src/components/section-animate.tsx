import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

function Section({ className, children, delay = 0 }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("mb-8", className)}
    >
      {children}
    </motion.section>
  );
}

export default Section;
