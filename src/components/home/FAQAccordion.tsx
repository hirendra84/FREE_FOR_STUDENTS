"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import clsx from "clsx";

const FAQS = [
  {
    question: "What if my college does not provide a .ac.in email?",
    answer: "Most platforms like GitHub, JetBrains, and Figma use SheerID for verification. You can manually upload a clear photo of your valid Student ID card. Ensure the ID clearly shows the current academic year or an expiration date. Sometimes a bonafide certificate from your college is also accepted."
  },
  {
    question: "Which offers require an international debit card and how to bypass charges?",
    answer: "Cloud providers like Oracle Cloud and DigitalOcean require a credit/debit card for identity verification to prevent abuse. Ensure international transactions are enabled on your card. They will authorize a small amount (₹80–₹100) and immediately refund it. You will NOT be charged monthly if you stay within the Always Free tiers."
  },
  {
    question: "How to renew licenses annually before graduation?",
    answer: "Most student packs (like GitHub and JetBrains) grant access for 1 year. To renew, simply log back into the educational portal 30 days before expiration and re-verify your student status by logging in with your college email or re-uploading your current Student ID."
  },
  {
    question: "Is this only for CS/IT students?",
    answer: "No! Any enrolled college/university student can claim these benefits. While tools like IDEs are geared toward CS, benefits like Notion, Figma, Canva, and Microsoft 365 are incredibly useful for all branches of study."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-full mb-4">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ & Troubleshooting</h2>
          <p className="text-muted-foreground text-lg">Common questions specifically for Indian college students.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={clsx(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-card border-primary/30 shadow-sm" : "bg-card/50 border-border hover:border-primary/50 hover:bg-card"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={clsx(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0",
                      isOpen ? "rotate-180 text-primary" : ""
                    )} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-muted-foreground">
                        <div className="h-px w-full bg-border/50 mb-4" />
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
