"use client";
import React from "react";
import { motion } from "framer-motion";


export function LinkCard({ title, description, url }: { title: string, description: string, url: string }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col justify-between p-6 bg-transparent 
                 border border-zecGold rounded-[2.5rem] group min-h-[140px] hover:bg-zecGold/5 transition-colors"
    >
      <div className="flex items-start">
        <h2 className="text-zecGold font-black uppercase tracking-tighter text-xl font-titulo">
          {title}
        </h2>
       </div>
      <p className="text-zinc-500 text-sm mt-4 font-medium leading-tight my-auto">
        {description}
      </p>
    </motion.a>
  );
}