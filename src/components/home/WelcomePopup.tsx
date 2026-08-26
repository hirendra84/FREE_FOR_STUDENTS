"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BellRing, Sparkles } from "lucide-react";
import Link from "next/link";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has seen the popup before
    const hasSeenPopup = localStorage.getItem("student-perks-popup-seen");
    
    if (!hasSeenPopup) {
      // Small delay to let the page load before showing popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("student-perks-popup-seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-[101] overflow-hidden rounded-3xl"
          >
            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/40 blur-[50px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/40 blur-[50px] rounded-full pointer-events-none" />

            <div className="relative bg-card/90 backdrop-blur-xl border border-white/10 shadow-2xl p-8 flex flex-col items-center text-center">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold mb-3 tracking-tight">
                Never Miss a Free Dev Tool!
              </h2>
              
              <p className="text-muted-foreground mb-8">
                New student developer perks and free cloud credits are added regularly. Get notified before they expire or change.
              </p>

              <div className="w-full flex flex-col gap-3">
                <Link 
                  href="/signup"
                  onClick={handleClose}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-transform active:scale-95"
                >
                  <BellRing className="w-5 h-5" />
                  Sign Up for Alerts
                </Link>
                
                <button
                  onClick={handleClose}
                  className="w-full py-3.5 rounded-xl bg-muted/50 text-foreground font-medium hover:bg-muted transition-colors"
                >
                  No thanks, just browse
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
