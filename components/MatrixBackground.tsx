"use client";
import { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const charset = "ᙇZECzcash01PRIVACYCYPHERPUNK$₿";
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    // O Math.random() espalha as posições iniciais para que não caiam em um "bloco" sólido
    const drops: number[] = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));

    const draw = () => {
      if (document.body.classList.contains("luz") || document.documentElement.classList.contains("luz")) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return; 
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.10)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 184, 0, 0.10)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charset[Math.floor(Math.random() * charset.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 70);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}