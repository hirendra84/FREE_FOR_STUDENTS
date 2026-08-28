"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Search, CheckSquare, Menu } from "lucide-react";
import { ShareButton } from "@/components/home/ShareButton";

export function Header({
  claimedCount,
  onSearchClick,
  onRoadmapClick,
}: {
  claimedCount: number;
  onSearchClick: () => void;
  onRoadmapClick: () => void;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-lg text-primary">
            <CheckSquare className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">StudentPerks</span>
          <span className="hidden sm:inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-secondary/20 text-secondary ml-2">
            India
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card/50 text-muted-foreground hover:bg-card/80 transition-colors text-sm"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline-block">Search perks...</span>
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          <button
            onClick={onRoadmapClick}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
          >
            <CheckSquare className="w-4 h-4" />
            <span className="hidden sm:inline-block">Claim Checklist</span>
            {claimedCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {claimedCount}
              </span>
            )}
          </button>

          <ShareButton 
            title="StudentPerks India"
            text="Unlock free developer tools & cloud credits!"
            url="https://free-for-students.vercel.app"
            variant="solid"
            hideTextOnMobile={true}
            className="!px-3 !py-1.5 !rounded-md !text-sm !font-medium"
          />

          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-card/80 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          )}

          <button className="sm:hidden p-2 rounded-md hover:bg-card/80 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
