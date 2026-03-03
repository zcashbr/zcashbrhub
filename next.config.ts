import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Força o Next.js a gerar arquivos estáticos (HTML/CSS/JS)
  images: {
    unoptimized: true, // O GitHub Pages não suporta a otimização de imagens padrão do Next.js
  },
  
  // ATENÇÃO: Se o seu link final no GitHub for algo como "seunome.github.io/meu-projeto",
  // você PRECISA tirar as barras (//) da linha abaixo e colocar o nome exato do repositório.
  // Caso contrário, o site vai carregar sem as cores e sem o CSS.
  
  basePath: '/zcashbrhub', 
};

export default nextConfig;