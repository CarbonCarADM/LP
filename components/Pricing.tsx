import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

// Inline Check Icon
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Border Beam Component for the PRO card
const BorderBeam = ({ 
  className = "", 
  size = 200, 
  duration = 15, 
  anchor = 90, 
  borderWidth = 1.5, 
  colorFrom = "#ffaa40", 
  colorTo = "#9c40ff", 
  delay = 0 
}: {
  className?: string;
  size?: number;
  duration?: number;
  anchor?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}) => (
  <div
    style={{
      "--size": size,
      "--duration": duration,
      "--anchor": anchor,
      "--border-width": borderWidth,
      "--color-from": colorFrom,
      "--color-to": colorTo,
      "--delay": `-${delay}s`,
    } as React.CSSProperties}
    className={`absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] 
      ![mask-clip:padding-box,border-box] ![mask-composite:intersect] 
      [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] 
      after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] 
      after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] 
      after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] ${className}`}
  />
);

const Pricing = () => {
  const features = [
    "Sistema 100% Personalizado",
    "Identidade Visual da sua Estética",
    "Consultoria de Implementação",
    "Suporte VIP Prioritário",
    "Integrações Exclusivas",
    "Treinamento para Equipe"
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="pricing">
      {/* Background Ambience - Slightly brighter ambient light for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <SectionBadge title="Sistema Exclusivo" className="mb-6" />
          
          <h2 className="font-display text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.05]">
            Tenha um sistema com a <br/> cara da sua estética
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Não se adapte a um software genérico. Nós criamos uma solução sob medida para a sua operação escalar com exclusividade.
          </p>
        </motion.div>

        {/* Single Exclusive Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col p-12 md:p-16 rounded-[3rem] border transition-all duration-500 group h-full backdrop-blur-3xl overflow-hidden bg-[#050505] bg-gradient-to-b from-red-950/20 to-black border-red-500/20 shadow-2xl z-10"
          >
            {/* Top Inner Light Reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent opacity-50" />

            {/* Noise Texture */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-0" 
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
            />

            {/* Border Beam Animation */}
            <BorderBeam size={400} duration={10} delay={9} colorFrom="#dc2626" colorTo="#7f1d1d" borderWidth={2} />

            {/* Glowing Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/[0.05] to-transparent pointer-events-none rounded-[2.5rem]" />
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 relative z-10">
                <h3 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white">Carbon Custom</h3>
                <span className="bg-red-500/20 backdrop-blur-md text-red-200 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-red-500/30 shadow-[0_0_20px_-3px_rgba(220,38,38,0.4)]">
                    Solução Sob Medida
                </span>
            </div>

            <p className="text-xl text-neutral-300 mb-12 font-light leading-relaxed relative z-10 max-w-3xl">
                Agende uma reunião estratégica para conhecermos sua operação e desenharmos o sistema ideal para o seu negócio.
            </p>

            {/* Button Area */}
            <Button 
              href="https://wa.me/5527997844419?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20exclusivo%20para%20a%20minha%20est%C3%A9tica!"
              variant="gradient"
              className="w-full font-bold uppercase tracking-wider text-sm h-16 rounded-2xl mb-10 relative z-10 transition-all shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] border border-red-500/30"
            >
              Agendar reunião agora
            </Button>

            {/* Features Divider */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="h-px bg-white/10 flex-1 group-hover:bg-red-500/20 transition-colors" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold group-hover:text-neutral-400 transition-colors">O que está incluso</span>
                <div className="h-px bg-white/10 flex-1 group-hover:bg-red-500/20 transition-colors" />
            </div>

            {/* Features List */}
            <div className="flex-1 relative z-10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.4)] transition-colors duration-300">
                      <CheckIcon className="w-3 h-3" />
                    </div>
                    <span className="text-neutral-300 font-light tracking-wide group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 text-center relative z-10 group-hover:border-white/10 transition-colors">
                <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-bold opacity-70 group-hover:opacity-100 group-hover:text-neutral-300 transition-all">
                    Fale diretamente com um especialista em tecnologia automotiva
                </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;