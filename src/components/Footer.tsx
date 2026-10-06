import React from 'react';
import { ArrowUp, Globe2, Mail } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 transition-colors ${
        isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-display text-lg font-bold text-slate-900 dark:text-white">
              {PROFILE_INFO.name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Final-Year International Relations Scholar · Fatima Jinnah Women University, Rawalpindi
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-emerald-600 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-emerald-600 transition-colors">
              Experience
            </a>
            <a href="#initiatives" className="hover:text-emerald-600 transition-colors">
              Initiatives
            </a>
            <a href="#education" className="hover:text-emerald-600 transition-colors">
              Education
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border text-xs transition-colors ${
                isDarkMode
                  ? 'border-slate-800 hover:bg-slate-900 text-slate-300'
                  : 'border-slate-200 hover:bg-slate-100 text-slate-600'
              }`}
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Areeba Sajjid. All rights reserved.</p>
          <p>Portfolio Dossier formulated for Global Diplomatic & Policy Internships.</p>
        </div>
      </div>
    </footer>
  );
};
