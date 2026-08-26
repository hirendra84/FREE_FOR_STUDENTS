"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

type Phase = {
  id: number;
  title: string;
  tasks: { id: string; label: string }[];
};

const PHASES: Phase[] = [
  {
    id: 1,
    title: "Day 1: Master Anchor",
    tasks: [
      { id: "github-student-pack", label: "Apply for GitHub Student Developer Pack" },
      { id: "github-copilot", label: "Activate GitHub Copilot Pro" },
    ]
  },
  {
    id: 2,
    title: "Day 2: IDEs, Design & Productivity",
    tasks: [
      { id: "jetbrains-pack", label: "Activate JetBrains All Products Pack" },
      { id: "figma-education", label: "Unlock Figma Professional Plan" },
      { id: "notion-education", label: "Upgrade Notion to Education Plus" },
    ]
  },
  {
    id: 3,
    title: "Day 3: Cloud & Hosting Setup",
    tasks: [
      { id: "azure-for-students", label: "Claim Microsoft Azure $100 Student Credits" },
      { id: "namecheap-domain", label: "Claim 1-year free .me domain from Namecheap" },
      { id: "digitalocean", label: "Claim $200 DigitalOcean Credits via GitHub Pack" },
      { id: "oracle-cloud-free", label: "Set up Oracle Cloud Always Free Tier" },
    ]
  },
  {
    id: 4,
    title: "Day 4: Learning & Certifications",
    tasks: [
      { id: "frontend-masters", label: "Activate 6 months of Frontend Masters" },
      { id: "educative-io", label: "Activate 6 months of Educative.io" },
      { id: "mongodb-atlas", label: "Claim MongoDB Atlas Credits & Free Exam Voucher" },
      { id: "postman-expert", label: "Complete Postman Student Expert training" },
    ]
  }
];

export function Roadmap({
  claimedPerkIds,
  onToggleClaim,
}: {
  claimedPerkIds: string[];
  onToggleClaim: (id: string) => void;
}) {
  const totalTasks = PHASES.reduce((acc, phase) => acc + phase.tasks.length, 0);
  const claimedCount = PHASES.reduce((acc, phase) => {
    return acc + phase.tasks.filter(t => claimedPerkIds.includes(t.id)).length;
  }, 0);
  const progressPercent = Math.round((claimedCount / totalTasks) * 100);

  return (
    <section className="py-16 bg-muted/30 border-y border-border" id="roadmap">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Claim Roadmap</h2>
          <p className="text-muted-foreground text-lg">Follow this 4-day plan to strategically claim all your benefits.</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12 shadow-sm">
          <div className="flex justify-between items-end mb-2">
            <div>
              <div className="text-sm text-muted-foreground font-medium mb-1">Overall Progress</div>
              <div className="text-2xl font-bold text-primary">
                {claimedCount} / {totalTasks} Claimed
              </div>
            </div>
            <div className="text-2xl font-bold text-secondary">{progressPercent}%</div>
          </div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {PHASES.map((phase, index) => {
            const isCompleted = phase.tasks.every(t => claimedPerkIds.includes(t.id));
            
            return (
              <motion.div 
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm">
                      {phase.id}
                    </span>
                    {phase.title}
                  </h3>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4" />
                      Completed
                    </span>
                  )}
                </div>
                
                <div className="p-2">
                  {phase.tasks.map((task) => {
                    const isClaimed = claimedPerkIds.includes(task.id);
                    return (
                      <button
                        key={task.id}
                        onClick={() => onToggleClaim(task.id)}
                        className="w-full flex items-center gap-4 p-4 hover:bg-muted transition-colors rounded-xl text-left group"
                      >
                        <div className="shrink-0 transition-colors duration-200">
                          {isClaimed ? (
                            <CheckCircle2 className="w-6 h-6 text-secondary" />
                          ) : (
                            <Circle className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                          )}
                        </div>
                        <span className={`text-base sm:text-lg transition-colors ${isClaimed ? 'text-muted-foreground line-through' : 'text-foreground font-medium'}`}>
                          {task.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
