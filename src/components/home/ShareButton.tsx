"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  className?: string;
  variant?: "solid" | "outline";
  hideTextOnMobile?: boolean;
}

export function ShareButton({ title, text, url, className = "", variant = "solid", hideTextOnMobile = false }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback to copy to clipboard
      try {
        await navigator.clipboard.writeText(`${title} - ${text} ${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors";
  
  const variantStyles = variant === "solid" 
    ? "bg-primary text-primary-foreground border-transparent hover:bg-primary/90 shadow-lg shadow-primary/20" 
    : "bg-muted text-foreground border border-border hover:bg-secondary hover:text-secondary-foreground shadow-lg shadow-black/5";

  return (
    <button 
      onClick={handleShare}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Check className="w-5 h-5 text-green-500" />
          </motion.div>
        ) : (
          <motion.div
            key="share"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Share2 className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className={`${hideTextOnMobile ? 'hidden sm:inline-block' : ''} whitespace-nowrap`}>
        {copied ? "Link Copied!" : "Share"}
      </span>
    </button>
  );
}
