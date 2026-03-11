"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export function LangToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // Classes atualizadas para ficar limpo, sem borda e com o mesmo hover do ThemeToggle
      className="p-2 text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-zecGold font-bold text-sm md:text-base flex items-center justify-center transition-all duration-300"
      title="Trocar Idioma / Change Language"
    >
      {lang === "pt" ? "EN" : "PT"}
    </motion.button>
  );
}