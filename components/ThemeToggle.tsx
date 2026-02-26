"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("luz", isLightMode);
  }, [isLightMode]);

  return (
    <button 
      onClick={() => setIsLightMode(!isLightMode)} 
      className="absolute top-8 right-8 p-2 text-[var(--foreground)] opacity-50 hover:opacity-100 transition-opacity z-50"
    >
      {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
}