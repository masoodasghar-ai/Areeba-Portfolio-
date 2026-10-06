import React, { useEffect, useState } from 'react';
import {
  ArrowUp,
  BookOpen,
  Briefcase,
  FileText,
  GraduationCap,
  Home,
  Layers,
  Mail,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface FloatingNavProps {
  isDarkMode: boolean;
}

interface NavSection {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SECTIONS: NavSection[] = [
  { id: 'hero', label: 'Top / About', icon: Home },
  { id: 'timeline', label: 'Timeline', icon: TrendingUp },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'initiatives', label: 'Initiatives', icon: Sparkles },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'skills', label: 'Skills & Languages', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const FloatingNav: React.FC<FloatingNavProps> = ({ isDarkMode }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Show back to top button when scrolled past hero (~380px)
      if (scrollPosition > 380) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Determine currently visible section
      const sectionElements = SECTIONS.map((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return { id: sec.id, top: Infinity, bottom: -Infinity };
        const rect = el.getBoundingClientRect();
        return {
          id: sec.id,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      // Find section closest to top middle of viewport
      const viewportMid = window.innerHeight * 0.35;
      const current = sectionElements.find(
        (sec) => sec.top <= viewportMid && sec.bottom >= viewportMid
      );

      if (current) {
        setActiveSection(current.id);
      } else if (scrollPosition < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ========================================================
          FLOATING SIDE NAVIGATION BAR (Desktop & Tablet)
         ======================================================== */}
      <nav
        aria-label="Quick section navigation"
        className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-1.5 p-1.5 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xl no-print transition-all duration-300"
      >
        {SECTIONS.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;

          return (
            <div key={sec.id} className="relative group">
              <button
                onClick={() => scrollTo(sec.id)}
                aria-label={`Jump to ${sec.label}`}
                className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-500/40 scale-105'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />

                {/* Subtle active indicator dot */}
                {isActive && (
                  <span className="absolute -left-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </button>

              {/* Tooltip on Hover */}
              <div
                role="tooltip"
                className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-700 dark:border-slate-200"
              >
                {sec.label}
              </div>
            </div>
          );
        })}
      </nav>

      {/* ========================================================
          BACK TO TOP FLOATING ACTION BUTTON
         ======================================================== */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          title="Scroll back to top"
          className="fixed bottom-6 right-5 sm:right-6 z-40 p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl shadow-emerald-950/40 border border-emerald-400/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/40 cursor-pointer animate-fade-in no-print group flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
};
