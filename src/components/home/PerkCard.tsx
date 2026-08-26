"use client";

import { Perk } from "@/data/perksData";
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck, ExternalLink, Info, Award, CreditCard, ShieldCheck } from "lucide-react";
import clsx from "clsx";

export function PerkCard({
  perk,
  isClaimed,
  onToggleClaim,
  onViewDetails,
}: {
  perk: Perk;
  isClaimed: boolean;
  onToggleClaim: (id: string) => void;
  onViewDetails: (perk: Perk) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={clsx(
        "relative rounded-2xl p-6 flex flex-col h-full border transition-all duration-300 md:hover:-translate-y-1",
        isClaimed 
          ? "bg-secondary/5 border-secondary/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
          : "glassmorphism hover:border-primary/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]"
      )}
    >
      {/* Top 20 Badge */}
      {perk.top20Rank && (
        <div className="absolute -top-3 -left-3 bg-gradient-to-br from-accent to-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
          <Award className="w-3 h-3" />
          Rank #{perk.top20Rank}
        </div>
      )}

      {/* Bookmark Toggle */}
      <button
        onClick={() => onToggleClaim(perk.id)}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        title={isClaimed ? "Mark as unclaimed" : "Mark as claimed"}
      >
        {isClaimed ? (
          <BookmarkCheck className="w-5 h-5 text-secondary" />
        ) : (
          <Bookmark className="w-5 h-5" />
        )}
      </button>

      <div className="mb-4 pt-2">
        <div className="text-xs font-semibold text-primary mb-2 tracking-wider uppercase">
          {perk.category}
        </div>
        <h3 className="text-xl font-bold leading-tight mb-1">{perk.name}</h3>
        <p className="text-sm text-muted-foreground">{perk.provider}</p>
      </div>

      {/* Value Callout */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 mb-4 inline-flex items-center w-max max-w-full">
        <span className="font-bold text-primary truncate">{perk.value}</span>
      </div>

      <p className="text-sm text-foreground/80 mb-6 flex-grow line-clamp-3">
        {perk.description}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {perk.isFree && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
            <ShieldCheck className="w-3 h-3" /> 100% Free
          </span>
        )}
        {!perk.requiresCard && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
            <CreditCard className="w-3 h-3" /> No Card Needed
          </span>
        )}
        <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium border border-border">
          {perk.verificationMethod.split('/')[0].trim()}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
        <a
          href={perk.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-foreground text-background text-center py-2.5 rounded-lg font-semibold text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
        >
          Claim Now
          <ExternalLink className="w-4 h-4" />
        </a>
        <button
          onClick={() => onViewDetails(perk)}
          className="flex-1 bg-muted text-foreground text-center py-2.5 rounded-lg font-semibold text-sm hover:bg-muted/80 transition-colors flex items-center justify-center gap-2"
        >
          <Info className="w-4 h-4" />
          Details
        </button>
      </div>
    </motion.div>
  );
}
