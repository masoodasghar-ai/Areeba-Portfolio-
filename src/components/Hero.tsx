import React, { useState } from 'react';
import {
  ArrowDown,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { IMAGES, PROFILE_INFO } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode, onOpenResume, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div id="about" className="absolute top-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Typographic & Identity Presence */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Top editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Multilateral Diplomacy · Climate Governance · Foreign Policy</span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Amplifying youth perspectives in{' '}
              <span className="italic font-normal text-slate-600 dark:text-slate-300">
                international policy
              </span>{' '}
              & climate action.
            </h1>

            {/* Profile Bio / Summary */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PROFILE_INFO.summary}
            </p>

            {/* Unboxed Metadata Row (Zero-Pill discipline) */}
            <div
              className={`flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Rawalpindi & Islamabad, Pakistan</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
                ·
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">PEEF</span>
                <span>Merit Scholar (CGPA 3.43)</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
                ·
              </span>
              <div className="flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WAGGGS UK Global Advocate</span>
              </div>
            </div>

            {/* Call to Action Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap ${
                  isDarkMode
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>Explore Experience & Briefs</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border transition-all whitespace-nowrap ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-800/90 text-slate-200 hover:bg-slate-700 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100 shadow-xs'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>View Full Executive CV</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium rounded-lg border transition-all ${
                  isDarkMode
                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Card with Verified Diplomatic Credentials */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle background framing border */}
              <div
                className={`absolute -inset-2 rounded-2xl border transition-colors pointer-events-none ${
                  isDarkMode ? 'border-slate-800' : 'border-slate-200/80'
                }`}
              />

              <div
                className={`relative rounded-xl overflow-hidden border shadow-xl transition-all ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                }`}
              >
                {/* Photo frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={IMAGES.portrait}
                    alt="Areeba Sajjid - Final-Year International Relations Student & Global Youth Advocate"
                    className="w-full h-full object-cover object-center filter saturate-[1.03] contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lower gradient overlay for text protection */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Badges on image overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 rounded backdrop-blur-md">
                      Official Appointment
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-semibold text-slate-200 bg-slate-950/80 border border-slate-700 rounded backdrop-blur-md">
                      2025 – Present
                    </span>
                  </div>

                  {/* Bottom overlay credential caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                      WAGGGS UK Delegation
                    </p>
                    <h3 className="font-display text-lg font-bold">Areeba Sajjid</h3>
                    <p className="text-xs text-slate-300 leading-snug mt-0.5">
                      Selected Global Advocate & UN Girls Takeover 2025 Country Representative
                    </p>
                  </div>
                </div>

                {/* Sub-card summary highlights */}
                <div
                  className={`p-4 space-y-2.5 text-xs ${
                    isDarkMode ? 'bg-slate-850 text-slate-300' : 'bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Represented youth at <strong>UN Women CSW70 Virtual Youth Forum</strong>{' '}
                      addressing climate justice & gender equity.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Championed <strong>"Greening the Future"</strong> urban plantation in
                      Rawalpindi and <strong>UNICEF</strong> health advocacy.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
