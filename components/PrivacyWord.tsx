"use client";
import { useState, useEffect } from "react";

export function PrivacyWord() {
  const word = "PRIVACY IS NORMAL";
  // The word start hidden
  const [displayText, setDisplayText] = useState("••••••••••••••");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isHovered) {
      let iteration = 0;
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";
      
      interval = setInterval(() => {
        setDisplayText((prev) =>
          word
            .split("")
            .map((letter, index) => {
              if (index < iteration) return word[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        
        if (iteration >= word.length) clearInterval(interval);
        iteration += 1 / 3; // Effect Speed
      }, 40);
    } else {
      // Retur hidden 
      setDisplayText("••••••••••••••");
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block cursor-default text-zecGold mx-2 transition-colors duration-300 hover:text-zecGold"
      title="GOSTOU, NÉ?"
    >
      <span className="opacity-0">{word}</span>
      
      <span className="absolute left-0 top-0 w-full text-center">
        {displayText}
      </span>
    </span>
  );
}