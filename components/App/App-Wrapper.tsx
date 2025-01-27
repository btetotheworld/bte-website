"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly off the screen
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      exit={{ opacity: 0, y: -20 }} // Exit animation (optional)
      transition={{ duration: 0.9, ease: "easeInOut" }} // Smooth animation
    >
      <div className="font-sans">{children}</div>
    </motion.div>
  );
};

export default AppWrapper;
