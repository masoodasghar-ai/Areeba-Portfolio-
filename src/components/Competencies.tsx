import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { CORE_COMPETENCIES } from '../data/portfolioData';

interface CompetenciesProps {
  isDarkMode: boolean;
}

export const Competencies: React.FC<CompetenciesProps> = ({ isDarkMode }) => {
  const [selectedId, setSelectedId] = useState<string>(CORE_COMPETENCIES[0].id);
  const activeCompetency = CORE_COMPETENCIES.find((c) => c.id === selectedId) || CORE_COMPETENCIES[0];

  return (
    <section id="competencies" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
            Core Policy Disciplines
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Areas of Specialization
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Grounded in International Relations theory, diplomatic protocols, and community-driven
            advocacy frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {CORE_COMPETENCIES.map((comp, idx) => {
              const isSelected = comp.id === selectedId;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedId(comp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-slate-800 border-emerald-500/80 shadow-md text-white'
                        : 'bg-white border-emerald-600 shadow-sm text-slate-900 ring-1 ring-emerald-600/30'
                      : isDarkMode
                      ? 'bg-slate-850/40 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                      : 'bg-slate-50 border-slate-200 hover:bg-white text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                      0{idx + 1}.
                    </span>
                    <span className="font-medium text-sm leading-snug">{comp.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'translate-x-1 text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Detail Pane */}
          <div
            className={`lg:col-span-7 p-7 sm:p-8 rounded-2xl border ${
              isDarkMode
                ? 'bg-slate-800/90 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900 shadow-xs'
            }`}
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  Disciplinary Focus
                </span>
                <h3 className="font-display text-2xl font-bold mt-1 text-slate-900 dark:text-white">
                  {activeCompetency.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {activeCompetency.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  Applied Methodologies & Key Frameworks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCompetency.subfields.map((sub, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 p-3 rounded-lg border text-xs ${
                        isDarkMode
                          ? 'bg-slate-900/60 border-slate-700/80 text-slate-300'
                          : 'bg-slate-50 border-slate-200/80 text-slate-700'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Integrated in WAGGGS advocacy briefs</span>
                <span className="font-mono">FJWU Academic Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
