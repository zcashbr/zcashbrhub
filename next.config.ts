import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  
  images: {
    unoptimized: true, 
  },
  
  // ATENÇÃO: Se o seu link final no GitHub for algo como "seunome.github.io/meu-projeto",
  // você PRECISA tirar as barras (//) da linha abaixo e colocar o nome exato do repositório.
  // Caso contrário, o site vai carregar sem as cores e sem o CSS.
  
  //basePath: '/zcashbrhub', 
};

export default nextConfig;