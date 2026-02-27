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
      // 1. Removemos o hover daqui e adicionamos 'relative' e 'overflow-hidden'
      className="flex flex-col justify-between p-6 bg-[var(--background)] border border-zecGold rounded-[2.5rem] group min-h-[140px] transition-colors relative overflow-hidden"
    >
      {/* 2. CAMADA DE HOVER: Fica por cima do fundo sólido, mudando de cor no hover */}
      <div className="absolute inset-0 bg-transparent group-hover:bg-zecGold/5 transition-colors duration-300 pointer-events-none" />

      {/* 3. CONTEÚDO: Adicionamos 'relative z-10' para que o texto fique acima da camada de brilho */}
      <div className="flex items-start relative z-10">
        <h2 className="text-zecGold font-black uppercase tracking-tighter text-xl font-titulo">
          {title}
        </h2>
       </div>
       
      <p className="text-zinc-500 text-sm mt-4 font-medium leading-tight my-auto relative z-10">
        {description}
      </p>
    </motion.a>
  );
}