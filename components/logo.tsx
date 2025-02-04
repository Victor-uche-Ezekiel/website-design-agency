import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-8 h-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-lg transform rotate-45" />
      <div className="absolute inset-1 bg-background rounded-lg transform rotate-45" />
      <div className="absolute inset-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg transform rotate-45">
        <div className="absolute inset-[2px] flex items-center justify-center text-white font-bold">
          V
        </div>
      </div>
    </motion.div>
  );
}
