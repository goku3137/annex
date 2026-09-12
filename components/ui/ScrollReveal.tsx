"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function ScrollReveal({ 
  children, 
  delay = 0,
  direction = "up"
}: { 
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const getInitialY = () => {
    if (direction === "up") return 50;
    if (direction === "down") return -50;
    return 0;
  };
  
  const getInitialX = () => {
    if (direction === "left") return 50;
    if (direction === "right") return -50;
    return 0;
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: getInitialY(),
        x: getInitialX()
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
