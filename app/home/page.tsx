"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";
import React from "react";

const Page = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight dark:text-transparent md:text-7xl"
        >
          Crafting Scalable & <br /> Innovative Web Solutions
        </motion.h1>
      </LampContainer>
    </>
  );
};

export default Page;
