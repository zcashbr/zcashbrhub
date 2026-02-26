import { FaDiscord, FaTelegramPlane, FaYoutube, FaInstagram, FaSoundcloud } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

// Adicionamos o "export" na frente para que outras páginas possam ler essa lista
export const socialMedias = [
  { title: "Instagram", url: "https://www.instagram.com/zcashbrazil", Icon: FaInstagram, size: 24 },
  { title: "X.com", url: "https://x.com/zcashbrazil", Icon: FaXTwitter, size: 24 },
  { title: "Discord", url: "https://discord.com/invite/zcash", Icon: FaDiscord, size: 26 },
  { title: "Telegram", url: "https://t.me/brzcash", Icon: FaTelegramPlane, size: 26 },
  { title: "Youtube", url: "https://www.youtube.com/@zcashbrasil", Icon: FaYoutube, size: 26 },
  { title: "Substack", url: "https://zcashbrazil.substack.com/", Icon: SiSubstack, size: 22 },
  { title: "SoundCloud", url: "https://soundcloud.com/zcashbrazil", Icon: FaSoundcloud, size: 28 },
];

// Adicionamos o "export" aqui também
export const categoriasDeLinks = [
  {
    tituloDaDivisoria: "Zcash Brasil",
    links: [
      { title: "Bem-vindos à Zcash Brasil ", description: "Conheça um pouco mais sobre a Zcash Brasil.", url: "https://zcashbrazil.substack.com/p/bem-vindoa-a-zcash" },
      { title: "ZecStats", description: "Dados em tempo real da rede Zcash.", url: "https://zecstats.info/" },
      { title: "Manifesto Generator", description: "Gerador de Manifesto Zcash em mais de 36 idiomas.", url: "https://privacyisnormal.xyz/" },
      { title: "Zcash Metro", description: "Interface gráfica e divertida de como funciona a Mempool.", url: "https://zcashmetro.io/" },
      { title: "Zcash Paper Wallet Generator", description: "Gerador de carteira via web com endereço UFVK.", url: "https://zecpaperwallet.com/" },
      { title: "Zcash PFP generator", description: "Ferramenta Online para gerar foto de perfil por IA no formato Cypherpunk.", url: "https://www.zcashpfp.xyz/" },
      { title: "Projeto Zeca", description: "Projeto Zeca para o Discord, mensagens criptografadas e anônimas em seu servidor.", url: "https://github.com/Paow4n/ZECA-v2" },
      { title: "Transações privadas e seguras com ZEC", description: "Como funciona transações privadas e seguras com ZEC ᙇ.", url: "https://zecpaperwallet.com/" },
      { title: "Zebra Launcher", description: "Instalador do Zebra versão alpha.", url: "https://github.com/ZcashFoundation/zebra-launcher/releases/tag/v0.0.0-alpha.1" },
      { title: "Nossa NewsLetter", description: "Assine nossa NewsLetter para ficar por dentro do que acontece dentro do ecossistema da Zcash.", url: "https://zechubrazil.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile" },
    ]
  },
  {
    tituloDaDivisoria: "Wallets",
    links: [
      { title: "Zashi (ZODL)", description: "Zcash Open Development Lab.", url: "https://electriccoin.co/zashi/" },
      { title: "Zingo PC e Mobile", description: "Zingo Labs.", url: "https://www.zingolabs.org/" },
      { title: "Ywallet PC e Mobile", description: "Ywallet Lab.", url: "https://ywallet.app/installation" },
      { title: "Zkool PC e Mobile", description: "Hanh Dev.", url: "https://github.com/hhanh00/zkool2" },
    ]
  },
  {
    tituloDaDivisoria: "Vídeos",
    links: [
      { title: "O que são Endereços Unificados(UA)?", description: "Vído explicando o que são os endereços unificados do ecossistema da Zcash.", url: "https://github.com/hhanh00/zkool2" },
      { title: "O que é Zcash?" , description:"Vídeo explicando o que seria Zcash." , url: "https://youtu.be/J1Nr1VL5dGU?si=NdVW2eWldtLLV76n"  },
      { title: "Tutorial Zashi Swaps pela Near Intents" , description: "Breve tutorial sobre como usar Near Intents nativamente na Zashi." , url: "https://youtu.be/-Cf09X2TMVw?si=57g8FQ40itVlWo9i"  },
      { title: "Quais os danos ao sacrificar a privacidade?" , description: "Vídeo explicando a necessidade da privacidade." , url: "https://youtu.be/lkzbnoZJs64?si=trHxOZzpbrZ5v105"  },
      { title: "Por que Edward Snowden ajudou na criação da Zcash?" , description: "História da participação de Snowden na Cerimônia de criação da Zcash." , url: "https://youtu.be/J9Tje9kEWSQ?si=ZbGWxYOe6q44urUm" },
      { title: "Tutorial Shielded Zcash na Metamask" , description: "Breve tutorial de como funciona o Snap da Zcash na Metamask." , url: "https://youtu.be/Et8d-rM7YXQ?si=Q14GsZOa4OyFPSuV" },
      { title: "Trocar $Sol por $Zec na Solswap " , description: "Breve tutorial de como trocas por solana por zcash na SolSwap." , url: "https://youtu.be/YEccCDMsOa0?si=kYIDQLZEaxN_31C9"  },
    ]
  },
  {
    tituloDaDivisoria: "Ecossistema",
    links: [
      { title: "Zcash Community Forum" , description: "Zcash Forum." , url: "https://forum.zcashcommunity.com/"  },
      { title: "ZecFaucet" , description: "Faucet de ZEC." , url: "https://zecfaucet.com/"  },
      { title: "ZecHub DAO" , description: "ZecHub Descentralized Anonymous Organization." , url: "https://www.zechub.xyz/"  },
      { title: "Zebra FullNode - The Zebra Book" , description: "Documentação de como instalar o Full Node da Zcash." , url: "https://zebra.zfnd.org/user/install.html"  },
    ]
  },
];