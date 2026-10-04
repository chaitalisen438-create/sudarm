/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const supportNumber = '919830098300';
  const welcomeMessage = "Hello Sundaram! I'm interested in your premium sleeveless blouses and kurtis collection. Could you please help me with sizing and designs?";

  const handleLaunchChat = () => {
    const encodedMsg = encodeURIComponent(welcomeMessage);
    const waUrl = `https://wa.me/${supportNumber}?text=${encodedMsg}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 font-sans">
      
      {/* Floating Dialog Box */}
      {isOpen && (
        <div className="bg-white border border-[#4B315C]/15 rounded-2xl p-4 shadow-2xl w-72 text-left animate-scale-in text-[#4B315C]">
          
          {/* Support Header with Avatar */}
          <div className="flex items-center justify-between border-b border-[#4B315C]/10 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Assistant Avatar Photo */}
                <img
                  src="/images/lifestyle/support-avatar.jpg"
                  alt="Avantika support assistant avatar"
                  className="h-10 w-10 rounded-full object-cover border border-[#C7A86B]/30"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image fails to load
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80";
                  }}
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#4B315C]">Avantika</span>
                <span className="text-[9px] text-[#C7A86B] font-bold tracking-wider uppercase">Boutique Stylist</span>
              </div>
            </div>

            {/* Close dialog button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#4B315C]/40 hover:text-[#4B315C] p-1 rounded-full transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Interactive Chat Message Body */}
          <div className="bg-[#FCF9F5] p-3 rounded-xl border border-[#4B315C]/5 mb-4">
            <p className="text-[10px] font-bold text-[#C7A86B] uppercase tracking-wide mb-1">SUNDARAM CONCIERGE</p>
            <p className="text-xs text-[#4B315C]/90 leading-relaxed font-sans">
              "Namaskar! I can help you select the perfect sleeveless blouses, verify your size, or customize a design. Tap below to chat directly with me on WhatsApp!"
            </p>
          </div>

          {/* Click to Action send message button */}
          <button
            onClick={handleLaunchChat}
            className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Send className="h-3.5 w-3.5" />
            START WHATSAPP CHAT
          </button>
        </div>
      )}

      {/* Main Pulse Floating Green Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact support on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-600 border border-emerald-400/20"
      >
        {/* Pulsing ring aura */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 filter drop-shadow-sm"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Small floating chat text bubble cue */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white tabular-nums animate-bounce shadow-md">
          1
        </span>
      </button>

    </div>
  );
}
