"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Heart } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export function DeveloperSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-3xl p-1 overflow-hidden border border-border/50 shadow-2xl shadow-primary/10"
          >
            <div className="bg-card/40 backdrop-blur-xl rounded-[23px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Info Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                  <Code2 className="w-4 h-4" />
                  Creator & Developer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Hirendra</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                  Passionate about building tools that help students and developers succeed. Check out my portfolio to see more of my work and projects.
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a 
                    href="https://hirendra.dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
                  >
                    Visit hirendra.dev
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://github.com/hirendra84" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-semibold text-foreground hover:bg-muted transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Profile
                  </a>
                </div>
              </div>

              {/* Iframe / Preview Window */}
              <div className="w-full md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl relative group bg-muted flex flex-col hidden sm:flex">
                {/* Mac-like Window Header */}
                <div className="h-8 bg-card border-b border-border flex items-center px-4 gap-2 w-full">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="mx-auto text-[10px] text-muted-foreground font-mono flex-1 text-center pr-8 truncate">
                    hirendra.dev
                  </div>
                </div>
                {/* Iframe */}
                <iframe 
                  src="https://hirendra.dev" 
                  className="w-full flex-1 bg-background"
                  title="Hirendra's Portfolio"
                  loading="lazy"
                />
                
                {/* Overlay link for clicking */}
                <a 
                  href="https://hirendra.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent z-10"
                  aria-label="Visit hirendra.dev"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
