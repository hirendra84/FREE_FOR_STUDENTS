import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 border-t border-border mt-auto bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} StudentPerks India. All rights reserved.</p>
          <p className="mt-1 text-xs">Not officially affiliated with any of the brands listed.</p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
        </nav>
      </div>
    </footer>
  );
}
