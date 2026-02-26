"use client";
import { useState, useEffect } from "react";

export function PrivacyWord() {
  const word = "PRIVACY";
  // A palavra começa oculta como uma senha
  const [displayText, setDisplayText] = useState("•••••••");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isHovered) {
      let iteration = 0;
      // Símbolos que vão piscar durante a "descriptografia"
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";
      
      interval = setInterval(() => {
        setDisplayText((prev) =>
          word
            .split("")
            .map((letter, index) => {
              // Trava a letra correta se a iteração já passou por ela
              if (index < iteration) return word[index];
              // Caso contrário, mostra um símbolo aleatório
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        
        if (iteration >= word.length) clearInterval(interval);
        iteration += 1 / 3; // Velocidade do efeito
      }, 40);
    } else {
      // Se tirar o mouse, volta a ficar oculto
      setDisplayText("•••••••");
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block cursor-crosshair text-white dark:text-white mx-2 transition-colors duration-300 hover:text-zecGold"
      title="GOSTOU, NÉ?"
    >
      {/* Texto "fantasma" invisível só para garantir que o tamanho da linha não fique pulando */}
      <span className="opacity-0">{word}</span>
      
      {/* O texto real que fica animando por cima */}
      <span className="absolute left-0 top-0 w-full text-center">
        {displayText}
      </span>
    </span>
  );
}