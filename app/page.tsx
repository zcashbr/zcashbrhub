// @ts-nocheck
"use client";
import Image from "next/image";

import { socialMedias, categoriasDeLinks } from "../data/links";

import { LinkCard } from "../components/LinkCard";
import { FloatingQR } from "../components/FloatingQR";
import { MatrixBackground } from "../components/MatrixBackground";
import { ThemeToggle } from "../components/ThemeToggle"; 
import { SectionDivider } from "../components/SectionDivider";
import { PrivacyWord } from "../components/PrivacyWord";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-500 px-6 py-16 relative">
    <ThemeToggle />
    <MatrixBackground />
      <FloatingQR url="https://paow4n.github.io/zcashbrasilhub/" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Image 
          src="/zcashbrasilhub/avatar.png" 
          alt="Zcash Logo" 
          width={128} 
          height={128}
          className="w-32 h-32 rounded-full mb-8 object-cover border border-zecGold shadow-[0_0_40px_rgba(255,184,0,0.2)]"
        />
        <h1 className="text-3xl md:text-4xl font-black text-zecGold uppercase tracking-[0.2em] mb-2 text-center">
          Zcash ᙇ Brasil
        </h1>
        <p className="text-[var(--foreground)] opacity-70 mb-6 uppercase tracking-[0.3em] text-xs font-bold">
          <PrivacyWord />
        </p>

        {/* Social Media */}
        <div className="flex flex-wrap gap-6 justify-center items-center mb-0.2">
          {socialMedias.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              title={social.title} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-zecGold hover:scale-110 transition-all duration-300"
            >
              <social.Icon size={social.size} />
            </a>
          ))}
        </div>
        
        {/* sections */}
        <div className="w-full flex flex-col items-center">
          {categoriasDeLinks.map((categoria, indexCategoria) => (
            <div key={indexCategoria} className="w-full">
              
              <SectionDivider title={categoria.tituloDaDivisoria} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
                {categoria.links.map((link, indexLink) => (
                  <LinkCard key={indexLink} {...link} />
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}