"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const dictionary = {
    //Português
  pt: {
    privacy: "PRIVACIDADE É NORMAL",
    categoriasDeLinks: [
      {
        tituloDaDivisoria: "Projetos Zcash Brasil",
        links: [
          { title: "Bem-vindos à Zcash Brasil", description: "Conheça um pouco mais sobre a Zcash Brasil.", url: "https://zcashbrazil.substack.com/p/bem-vindoa-a-zcash" },
          { title: "ZecStats", description: "Dados em tempo real da rede Zcash.", url: "https://zecstats.info/" },
          { title: "Manifesto Generator", description: "Gerador de Manifesto Zcash em mais de 36 idiomas.", url: "https://privacyisnormal.xyz/" },
          { title: "Zcash Metro", description: "Interface gráfica e divertida de como funciona a Mempool.", url: "https://zcashmetro.io/" },
          { title: "Zcash Paper Wallet Generator", description: "Gerador de carteira via web com endereço UFVK.", url: "https://zecpaperwallet.com/" },
          { title: "Zcash PFP generator", description: "Ferramenta Online para gerar foto de perfil por IA no formato Cypherpunk.", url: "https://www.zcashpfp.xyz/" },
          { title: "Projeto Zeca", description: "Projeto Zeca para o Discord, mensagens criptografadas e anônimas em seu servidor.", url: "https://github.com/Paow4n/ZECA-v2" },
          { title: "Transações privadas e seguras com ZEC", description: "Como funciona transações privadas e seguras com ZEC ᙇ.", url: "https://zcashbrazil.substack.com/p/transacoes-privadas-e-seguras-com" },
          { title: "Nossa NewsLetter", description: "Assine nossa NewsLetter para ficar por dentro do que acontece dentro do ecossistema da Zcash.", url: "https://zechubrazil.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile" },
        ]
      },
      {
        tituloDaDivisoria: "Wallets",
        links: [
          { title: "ZODL", description: "Zcash Open Development Lab.", url: "https://electriccoin.co/zashi/" },
          { title: "Zingo PC e Mobile", description: "Zingo Labs.", url: "https://www.zingolabs.org/" },
          { title: "Ywallet PC e Mobile", description: "Ywallet Lab.", url: "https://ywallet.app/installation" },
          { title: "Zkool PC e Mobile", description: "Hanh Dev.", url: "https://github.com/hhanh00/zkool2" },
        ]
      },
      {
        tituloDaDivisoria: "Vídeos",
        links: [
          { title: "O que são Endereços Unificados(UA)?", description: "Vídeo explicando o que são os endereços unificados do ecossistema da Zcash.", url: "https://www.youtube.com/watch?v=Rvfh3faK3jQ" },
          { title: "O que é Zcash?", description: "Vídeo explicando o que seria Zcash.", url: "https://youtu.be/J1Nr1VL5dGU?si=NdVW2eWldtLLV76n" },
          { title: "Tutorial ZODL Swaps pela Near Intents", description: "Breve tutorial sobre como usar Near Intents nativamente na ZODL, antiga Zashi.", url: "https://youtu.be/-Cf09X2TMVw?si=57g8FQ40itVlWo9i" },
          { title: "Quais os danos ao sacrificar a privacidade?", description: "Vídeo explicando a necessidade da privacidade.", url: "https://youtu.be/lkzbnoZJs64?si=trHxOZzpbrZ5v105" },
          { title: "Por que Edward Snowden ajudou na criação da Zcash?", description: "História da participação de Snowden na Cerimônia de criação da Zcash.", url: "https://youtu.be/J9Tje9kEWSQ?si=ZbGWxYOe6q44urUm" },
          { title: "Tutorial Shielded Zcash na Metamask", description: "Breve tutorial de como funciona o Snap da Zcash na Metamask.", url: "https://youtu.be/Et8d-rM7YXQ?si=Q14GsZOa4OyFPSuV" },
          { title: "Trocar $Sol por $Zec na SolSwap", description: "Breve tutorial de como trocar Solana por Zcash na SolSwap.", url: "https://youtu.be/YEccCDMsOa0?si=kYIDQLZEaxN_31C9" },
        ]
      },
      {
        tituloDaDivisoria: "Ecossistema",
        links: [
          { title: "Zcash Community Forum", description: "Zcash Forum.", url: "https://forum.zcashcommunity.com/" },
          { title: "ZecFaucet", description: "Faucet de ZEC.", url: "https://zecfaucet.com/" },
          { title: "ZecHub DAO", description: "ZecHub Descentralized Anonymous Organization.", url: "https://www.zechub.xyz/" },
          { title: "Zebra FullNode - The Zebra Book", description: "Documentação de como instalar o Full Node da Zcash.", url: "https://zebra.zfnd.org/user/install.html" },
          { title: "Zebra Launcher", description: "Instalador do Zebra versão alpha.", url: "https://github.com/ZcashFoundation/zebra-launcher/releases/tag/v0.0.0-alpha.1" },
        ]
      }
    ]
  },
  //English
  en: {
    privacy: "PRIVACY IS NORMAL",
    categoriasDeLinks: [
      {
        tituloDaDivisoria: "Zcash Brazil Projects",
        links: [
          { title: "Welcome to Zcash Brazil", description: "Learn a little more about Zcash Brazil.", url: "https://zcashbrazil.substack.com/p/bem-vindoa-a-zcash" },
          { title: "ZecStats", description: "Real-time data from the Zcash network.", url: "https://zecstats.info/" },
          { title: "Manifesto Generator", description: "Zcash Manifesto generator in over 36 languages.", url: "https://privacyisnormal.xyz/" },
          { title: "Zcash Metro", description: "Fun graphical interface of how the Mempool works.", url: "https://zcashmetro.io/" },
          { title: "Zcash Paper Wallet Generator", description: "Web-based wallet generator with UFVK address.", url: "https://zecpaperwallet.com/" },
          { title: "Zcash PFP generator", description: "Online tool to generate AI profile pictures in Cypherpunk format.", url: "https://www.zcashpfp.xyz/" },
          { title: "Zeca Project", description: "Zeca Project for Discord, encrypted and anonymous messages on your server.", url: "https://github.com/Paow4n/ZECA-v2" },
          { title: "Private and secure transactions with ZEC", description: "How private and secure transactions with ZEC ᙇ work.", url: "https://zcashbrazil.substack.com/p/transacoes-privadas-e-seguras-com" },
          { title: "Our NewsLetter", description: "Subscribe to our NewsLetter to stay updated on the Zcash ecosystem.", url: "https://zechubrazil.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile" },
        ]
      },
      {
        tituloDaDivisoria: "Wallets",
        links: [
          { title: "ZODL", description: "Zcash Open Development Lab.", url: "https://electriccoin.co/zashi/" },
          { title: "Zingo PC and Mobile", description: "Zingo Labs.", url: "https://www.zingolabs.org/" },
          { title: "Ywallet PC and Mobile", description: "Ywallet Lab.", url: "https://ywallet.app/installation" },
          { title: "Zkool PC and Mobile", description: "Hanh Dev.", url: "https://github.com/hhanh00/zkool2" },
        ]
      },
      {
        tituloDaDivisoria: "Videos",
        links: [
          { title: "What are Unified Addresses (UA)?", description: "Video explaining what unified addresses are in the Zcash ecosystem.", url: "https://www.youtube.com/watch?v=Rvfh3faK3jQ" },
          { title: "What is Zcash?", description: "Video explaining what Zcash is.", url: "https://youtu.be/J1Nr1VL5dGU?si=NdVW2eWldtLLV76n" },
          { title: "ZODL Swaps Tutorial via Near Intents", description: "Brief tutorial on how to use Near Intents natively in ZODL, formerly Zashi.", url: "https://youtu.be/-Cf09X2TMVw?si=57g8FQ40itVlWo9i" },
          { title: "What are the damages of sacrificing privacy?", description: "Video explaining the need for privacy.", url: "https://youtu.be/lkzbnoZJs64?si=trHxOZzpbrZ5v105" },
          { title: "Why did Edward Snowden help create Zcash?", description: "Story of Snowden's participation in the Zcash creation ceremony.", url: "https://youtu.be/J9Tje9kEWSQ?si=ZbGWxYOe6q44urUm" },
          { title: "Shielded Zcash on Metamask Tutorial", description: "Brief tutorial on how the Zcash Snap works on Metamask.", url: "https://youtu.be/Et8d-rM7YXQ?si=Q14GsZOa4OyFPSuV" },
          { title: "Swap $Sol for $Zec on SolSwap", description: "Brief tutorial on how to swap Solana for Zcash on SolSwap.", url: "https://youtu.be/YEccCDMsOa0?si=kYIDQLZEaxN_31C9" },
        ]
      },
      {
        tituloDaDivisoria: "Ecosystem",
        links: [
          { title: "Zcash Community Forum", description: "Zcash Forum.", url: "https://forum.zcashcommunity.com/" },
          { title: "ZecFaucet", description: "ZEC Faucet.", url: "https://zecfaucet.com/" },
          { title: "ZecHub DAO", description: "ZecHub Descentralized Anonymous Organization.", url: "https://www.zechub.xyz/" },
          { title: "Zebra FullNode - The Zebra Book", description: "Documentation on how to install the Zcash Full Node.", url: "https://zebra.zfnd.org/user/install.html" },
          { title: "Zebra Launcher", description: "Zebra alpha version installer.", url: "https://github.com/ZcashFoundation/zebra-launcher/releases/tag/v0.0.0-alpha.1" },
        ]
      }
    ]
  },
};

type Language = "pt" | "en";
type Dictionary = typeof dictionary.pt;

const LanguageContext = createContext<{
  lang: Language;
  t: Dictionary;
  toggleLanguage: () => void;
}>({
  lang: "pt",
  t: dictionary.pt,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("zcashbr-lang") as Language;
    if (savedLang) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes("pt")) {
        setLang("pt");
      } else {
        setLang("en");
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
    localStorage.setItem("zcashbr-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);