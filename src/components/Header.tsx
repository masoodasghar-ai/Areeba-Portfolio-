import React from 'react';
import { FileText, Mail, Moon, Printer, Sun } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleTheme,
  onOpenResume,
  onOpenContact,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b no-print ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-800 backdrop-blur-md text-slate-100'
          : 'bg-white/90 border-slate-200/80 backdrop-blur-md text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-xl font-bold tracking-tight hover:opacity-85 transition-opacity whitespace-nowrap"
        >
          {PROFILE_INFO.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a
            href="#about"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            About
          </a>
          <a
            href="#timeline"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            Timeline
          </a>
          <a
            href="#experience"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            Experience
          </a>
          <a
            href="#initiatives"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            Initiatives
          </a>
          <a
            href="#competencies"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            Competencies
          </a>
          <a
            href="#education"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            Education
          </a>
          <a
            href="#resume"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            Resume
          </a>
          <a
            href="#skills"
            className={`${
              isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            } transition-colors`}
          >
            Skills
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle visual theme"
            className={`p-2 rounded-lg text-xs transition-colors ${
              isDarkMode
                ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Dedicated Download/Print Portfolio Button */}
          <button
            onClick={handlePrint}
            aria-label="Download or Print Portfolio"
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-xs whitespace-nowrap cursor-pointer"
            title="Download or Print Areeba's Academic CV"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download/Print Portfolio</span>
            <span className="sm:hidden">Print CV</span>
          </button>

          {/* Executive Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all whitespace-nowrap cursor-pointer ${
              isDarkMode
                ? 'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Full CV View</span>
          </button>

          {/* Get in Touch CTA */}
          <button
            onClick={onOpenContact}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all shadow-xs whitespace-nowrap cursor-pointer ${
              isDarkMode
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};
