"use client";

import { Perk } from "@/data/perksData";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldAlert, BadgeCheck, Clock, CreditCard, Tag } from "lucide-react";
import { useEffect } from "react";

export function PerkModal({
  perk,
  isOpen,
  onClose,
}: {
  perk: Perk | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && perk && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal / Drawer */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 bottom-4 top-20 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:h-auto md:max-h-[85vh] bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative p-6 border-b border-border bg-muted/30">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pr-10">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
                  {perk.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">{perk.name}</h2>
                <p className="text-muted-foreground text-lg">{perk.provider}</p>
              </div>
            </div>

            {/* Content Scrollable Area */}
            <div className="p-6 overflow-y-auto flex-1">
              
              {/* Value Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 flex items-start gap-4">
                <div className="p-2 bg-primary/20 text-primary rounded-lg shrink-0 mt-1">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Student Benefit</h4>
                  <p className="text-primary font-bold text-xl">{perk.value}</p>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none mb-8">
                <h3>Overview</h3>
                <p>{perk.description}</p>
              </div>

              {/* Grid Details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <ShieldAlert className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Verification Method</h5>
                    <p className="text-sm text-muted-foreground">{perk.verificationMethod}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <CreditCard className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Credit Card Requirement</h5>
                    <p className="text-sm text-muted-foreground">
                      {perk.requiresCard 
                        ? "Required for identity verification" 
                        : "No credit card needed"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <Clock className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Duration & Renewal</h5>
                    <p className="text-sm text-muted-foreground">Typically valid for 1 year, renewable while enrolled.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <Tag className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Tags</h5>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {perk.tags.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 bg-background rounded-md border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Indian Students Guide */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5 mb-6">
                <h4 className="font-semibold text-secondary flex items-center gap-2 mb-3">
                  🇮🇳 Guide for Indian Students
                </h4>
                <ul className="list-disc list-inside text-sm space-y-2 text-foreground/80">
                  <li>If your college does not provide a <code>.ac.in</code> email, you can usually upload a photo of your valid Student ID card.</li>
                  <li>Ensure your ID card clearly shows the current academic year or expiration date.</li>
                  <li>If prompted for SheerID verification, use your official name exactly as it appears on your college documents.</li>
                </ul>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-muted/30">
              <a
                href={perk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Proceed to Official Portal
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
