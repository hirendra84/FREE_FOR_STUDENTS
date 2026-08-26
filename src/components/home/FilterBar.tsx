"use client";

import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export type Filters = {
  searchQuery: string;
  selectedCategories: string[];
  noCreditCardOnly: boolean;
  freeForeverOnly: boolean;
  sortBy: string;
};

const CATEGORIES = [
  "All Perks",
  "Top 20 Ranked",
  "Cloud & Infrastructure",
  "Developer Tools & IDEs",
  "AI & Machine Learning",
  "Design & Creative",
  "Education & Certifications",
  "Cybersecurity",
  "Productivity & Office",
];

const SORT_OPTIONS = [
  { value: "rank", label: "Top 20 Rank" },
  { value: "value-desc", label: "Monetary Value (High to Low)" },
  { value: "az", label: "Alphabetical (A-Z)" },
];

export function FilterBar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
}) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Search Shortcut Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleCategoryToggle = (category: string) => {
    if (category === "All Perks") {
      onChange({ ...filters, selectedCategories: ["All Perks"] });
      return;
    }

    let newCats = filters.selectedCategories.filter((c) => c !== "All Perks");
    if (newCats.includes(category)) {
      newCats = newCats.filter((c) => c !== category);
    } else {
      newCats.push(category);
    }
    
    if (newCats.length === 0) newCats = ["All Perks"];
    
    onChange({ ...filters, selectedCategories: newCats });
  };

  return (
    <div className="container mx-auto px-4 py-8 sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
        
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-border rounded-xl leading-5 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
            placeholder="Search perks, providers, or tags... (⌘+K)"
            value={filters.searchQuery}
            onChange={(e) => onChange({ ...filters, searchQuery: e.target.value })}
          />
        </div>

        {/* Quick Toggles & Sort */}
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={filters.noCreditCardOnly}
                onChange={(e) => onChange({ ...filters, noCreditCardOnly: e.target.checked })}
              />
              <div className={clsx(
                "block w-10 h-6 rounded-full transition-colors",
                filters.noCreditCardOnly ? "bg-primary" : "bg-muted"
              )}></div>
              <div className={clsx(
                "dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform",
                filters.noCreditCardOnly ? "transform translate-x-4" : ""
              )}></div>
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              No Card Needed
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={filters.freeForeverOnly}
                onChange={(e) => onChange({ ...filters, freeForeverOnly: e.target.checked })}
              />
              <div className={clsx(
                "block w-10 h-6 rounded-full transition-colors",
                filters.freeForeverOnly ? "bg-secondary" : "bg-muted"
              )}></div>
              <div className={clsx(
                "dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform",
                filters.freeForeverOnly ? "transform translate-x-4" : ""
              )}></div>
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">
              100% Free Tiers
            </span>
          </label>

          {/* Sort Dropdown */}
          <div className="relative ml-auto lg:ml-0">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-card hover:bg-muted transition-colors text-sm font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Sort: {SORT_OPTIONS.find(o => o.value === filters.sortBy)?.label}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-card ring-1 ring-black ring-opacity-5 z-50 border border-border overflow-hidden">
                <div className="py-1" role="menu">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onChange({ ...filters, sortBy: option.value });
                        setIsSortOpen(false);
                      }}
                      className={clsx(
                        "block px-4 py-2 text-sm w-full text-left hover:bg-muted transition-colors",
                        filters.sortBy === option.value ? "text-primary font-semibold bg-primary/5" : "text-foreground"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((category) => {
          const isSelected = filters.selectedCategories.includes(category);
          return (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={clsx(
                "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                isSelected 
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
