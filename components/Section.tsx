import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

const Section = ({ children, delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    className="mb-2"
  >
    {children}
  </motion.div>
);

export default Section;
