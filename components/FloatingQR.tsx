"use client";
import React, { useState } from "react";
import { Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";

export function FloatingQR({ url }: { url: string }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div 
      className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end"
      onMouseLeave={() => setShowQR(false)}
    >
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 bg-[var(--background)] p-6 rounded-[2rem] border border-zecGold/50 shadow-[0_0_40px_rgba(255,184,0,0.15)] flex flex-col items-center origin-bottom-right"
          >
            <h3 className="text-zecGold font-black mb-3 text-sm uppercase tracking-widest text-center">
              QR Code
            </h3>
            <div className="bg-white p-3 rounded-xl mb-3">
              <QRCode value={url} size={140} level="H" />
            </div>
            <p className="text-[var(--foreground)] opacity-70 text-[10px] font-medium text-center uppercase tracking-wider">
              Acesse no celular
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowQR(!showQR)}
        title="Abrir no celular"
        className={`p-3 backdrop-blur-sm text-[var(--foreground)] border rounded-full shadow-[0_0_15px_rgba(255,184,0,0.1)] transition-all duration-300 ${
          showQR ? 'bg-zecGold/10 border-zecGold scale-110' : 'bg-zinc-900/50 border-zecGold/30 hover:scale-110 hover:border-zecGold'
        }`}
      >
        <Smartphone size={24} className={showQR ? 'text-zecGold' : ''} />
      </button>
    </div>
  );
}