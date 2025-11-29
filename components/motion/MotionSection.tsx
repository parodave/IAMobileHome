// components/motion/MotionSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function MotionSection({ id, className, children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
