import React from "react";

export function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto my-10">
      {/* Left Line */}
      <div className="flex-grow h-px bg-gradient-to-r from-transparent to-zecGold/30"></div>
      
      {/* Centralized Title */}
      <span className="px-4 text-[var(--zec-gold-dinamico)] opacity-50 text-xs font-bold uppercase tracking-[0.3em]">
        {title}
      </span>
      
      {/* Right Line */}
      <div className="flex-grow h-px bg-gradient-to-l from-transparent to-zecGold/30"></div>
    </div>
  );
}