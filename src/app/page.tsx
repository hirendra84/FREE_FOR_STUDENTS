"use client";

import { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { FilterBar, Filters } from "@/components/home/FilterBar";
import { PerkCard } from "@/components/home/PerkCard";
import { PerkModal } from "@/components/home/PerkModal";
import { Roadmap } from "@/components/home/Roadmap";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { WelcomePopup } from "@/components/home/WelcomePopup";
import { DeveloperSection } from "@/components/home/DeveloperSection";
import { PERKS_DATA, Perk } from "@/data/perksData";
import { motion } from "framer-motion";
import { Github, GitPullRequest } from "lucide-react";

export default function Home() {
  const [claimedPerks, setClaimedPerks] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filters>({
    searchQuery: "",
    selectedCategories: ["All Perks"],
    noCreditCardOnly: false,
    freeForeverOnly: false,
    sortBy: "rank",
  });
  
  const [selectedPerk, setSelectedPerk] = useState<Perk | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("student-perks-claimed");
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setClaimedPerks(JSON.parse(saved));
      } catch {
        console.error("Failed to parse claimed perks");
      }
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("student-perks-claimed", JSON.stringify(claimedPerks));
  }, [claimedPerks]);

  const handleToggleClaim = (id: string) => {
    setClaimedPerks(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleViewDetails = (perk: Perk) => {
    setSelectedPerk(perk);
    setIsModalOpen(true);
  };

  const filteredPerks = useMemo(() => {
    let result = [...PERKS_DATA];

    // Search
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        p => 
          p.name.toLowerCase().includes(q) || 
          p.provider.toLowerCase().includes(q) || 
          p.category.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Category
    if (!filters.selectedCategories.includes("All Perks")) {
      if (filters.selectedCategories.includes("Top 20 Ranked")) {
        result = result.filter(p => p.top20Rank && p.top20Rank <= 20);
      } else {
        result = result.filter(p => filters.selectedCategories.includes(p.category));
      }
    }

    // Toggles
    if (filters.noCreditCardOnly) {
      result = result.filter(p => !p.requiresCard);
    }
    if (filters.freeForeverOnly) {
      result = result.filter(p => p.isFree);
    }

    // Sorting
    result.sort((a, b) => {
      if (filters.sortBy === "rank") {
        return (a.top20Rank || 999) - (b.top20Rank || 999);
      }
      if (filters.sortBy === "az") {
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === "value-desc") {
        // Simple extraction for demonstration
        const valA = parseInt(a.value.replace(/[^0-9]/g, '')) || 0;
        const valB = parseInt(b.value.replace(/[^0-9]/g, '')) || 0;
        return valB - valA;
      }
      return 0;
    });

    return result;
  }, [filters]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header 
        claimedCount={claimedPerks.length} 
        onSearchClick={() => {
          window.scrollTo({ top: 400, behavior: 'smooth' });
          // Focus search handled inside FilterBar via hotkey, 
          // or we can pass a prop to focus it. 
        }}
        onRoadmapClick={() => scrollToSection("roadmap")}
      />
      
      <main className="flex-1">
        <Hero 
          onExploreClick={() => {
            setFilters(prev => ({ ...prev, selectedCategories: ["Top 20 Ranked"] }));
            scrollToSection("perks-grid");
          }}
          onRoadmapClick={() => scrollToSection("roadmap")}
          onFilterNoCardClick={() => {
            setFilters(prev => ({ ...prev, noCreditCardOnly: true }));
            scrollToSection("perks-grid");
          }}
        />

        <div id="perks-grid" className="scroll-mt-24">
          <FilterBar filters={filters} onChange={setFilters} />
          
          <section className="container mx-auto px-4 py-12">
            {filteredPerks.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-2">No perks found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => setFilters({
                    searchQuery: "",
                    selectedCategories: ["All Perks"],
                    noCreditCardOnly: false,
                    freeForeverOnly: false,
                    sortBy: "rank",
                  })}
                  className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredPerks.map((perk) => (
                  <PerkCard 
                    key={perk.id}
                    perk={perk}
                    isClaimed={claimedPerks.includes(perk.id)}
                    onToggleClaim={handleToggleClaim}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </motion.div>
            )}
          </section>
        </div>

        <Roadmap 
          claimedPerkIds={claimedPerks} 
          onToggleClaim={handleToggleClaim} 
        />
        
        <FAQAccordion />
        <DeveloperSection />
      </main>

      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4 flex flex-col items-center text-center text-muted-foreground gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://github.com/hirendra84/FREE_FOR_STUDENTS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors font-medium border border-border"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
            <a 
              href="https://github.com/hirendra84/FREE_FOR_STUDENTS/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors font-medium border border-border"
            >
              <GitPullRequest className="w-5 h-5" />
              Contribute / Add Perk
            </a>
          </div>

          <div className="max-w-md">
            <p className="font-semibold text-foreground mb-1">© {new Date().getFullYear()} StudentPerks India. Open Source Hub.</p>
            <p className="text-sm">Built to help students. Not affiliated with GitHub, Microsoft, JetBrains, or any other listed providers.</p>
          </div>
        </div>
      </footer>

      <PerkModal 
        perk={selectedPerk} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <WelcomePopup />
    </>
  );
}
