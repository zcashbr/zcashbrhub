import type { Metadata } from "next";
import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";

// 1. Configuração da Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700', '900'], 
  variable: '--font-roboto-condensed',
});

// 2. Metadados do seu Hub (Aparecem na aba do navegador e no Google)
export const metadata: Metadata = {
  title: "Zcash Brasil Hub",
  description: "Privacidade é normal. Ecossistema Zcash no Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${robotoCondensed.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}