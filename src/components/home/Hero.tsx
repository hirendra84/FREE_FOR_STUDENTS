"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard, Zap } from "lucide-react";

export function Hero({
  onExploreClick,
  onRoadmapClick,
  onFilterNoCardClick,
}: {
  onExploreClick: () => void;
  onRoadmapClick: () => void;
  onFilterNoCardClick: () => void;
}) {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 border border-secondary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          Curated for Indian CS/IT Students
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
        >
          Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">₹3,50,000+</span> in Free Developer Tools & Cloud Credits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Level up your development stack with your college ID. Discover 100% free tiers, premium software licenses, and cloud credits—no strings attached.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
          >
            Explore Top 20 Must-Haves
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={onRoadmapClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glassmorphism font-bold hover:bg-card/40 transition-colors flex items-center justify-center gap-2"
          >
            Interactive Claim Roadmap
          </button>
        </motion.div>

        {/* Stats Ticker */}
        <motion.div
          initial={{ opacity: 0, border: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glassmorphism rounded-2xl p-6 max-w-5xl mx-auto border-border flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-secondary/20 text-secondary rounded-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">$5,000+</div>
              <div className="text-sm text-muted-foreground">Total Savings</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/20 text-primary rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">80+</div>
              <div className="text-sm text-muted-foreground">Verified Tools</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent/20 text-accent rounded-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Free Tiers</div>
            </div>
          </div>

          <button 
            onClick={onFilterNoCardClick}
            className="flex items-center gap-3 group hover:opacity-80 transition-opacity text-left"
          >
            <div className="p-3 bg-red-500/20 text-red-500 rounded-lg group-hover:scale-105 transition-transform">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">0 Card</div>
              <div className="text-sm text-muted-foreground underline decoration-dotted underline-offset-4">Options Available</div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
