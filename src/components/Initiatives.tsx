import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Filter,
  Globe2,
  Leaf,
  ShieldAlert,
  Sparkles,
  Tag,
  X,
} from 'lucide-react';
import { INITIATIVES, matchSkillOrProficiency } from '../data/portfolioData';
import { InitiativeItem } from '../types/portfolio';
import { InitiativeModal } from './InitiativeModal';

interface InitiativesProps {
  isDarkMode: boolean;
  selectedSkill?: string | null;
  onClearSkill?: () => void;
  onSelectSkill?: (skill: string) => void;
}

export const Initiatives: React.FC<InitiativesProps> = ({
  isDarkMode,
  selectedSkill,
  onClearSkill,
  onSelectSkill,
}) => {
  const [selectedInitiative, setSelectedInitiative] = useState<InitiativeItem | null>(null);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'climate':
        return <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'diplomacy':
        return <Globe2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const filtered = INITIATIVES.filter((init) => {
    return matchSkillOrProficiency(init.skills, selectedSkill);
  });

  return (
    <section id="initiatives" className="py-16 lg:py-24 bg-slate-100/60 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
              Impact Dossier
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Flagship Initiatives & Campaigns
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              From representing youth at UN CSW70 to mobilizing hundreds in grassroots tree plantation
              and plastic waste mitigation, explore key campaigns led and executed by Areeba.
            </p>
          </div>

          {selectedSkill && onClearSkill && (
            <button
              onClick={onClearSkill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors self-start md:self-auto cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* Skill Filter Active Notice */}
        {selectedSkill && (
          <div
            className={`mb-8 p-3.5 rounded-xl border flex items-center justify-between text-xs sm:text-sm animate-fade-in ${
              isDarkMode
                ? 'bg-emerald-950/40 border-emerald-700 text-emerald-200'
                : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                Filtered by skill tag:{' '}
                <strong className="font-bold underline">{selectedSkill}</strong> ({filtered.length}{' '}
                matching initiative{filtered.length !== 1 ? 's' : ''})
              </span>
            </div>
            {onClearSkill && (
              <button
                onClick={onClearSkill}
                className="flex items-center gap-1 font-semibold text-xs text-emerald-800 dark:text-emerald-300 hover:underline cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Show All Initiatives</span>
              </button>
            )}
          </div>
        )}

        {/* Empty state when no initiatives match */}
        {filtered.length === 0 ? (
          <div
            className={`p-10 rounded-2xl border text-center space-y-3 ${
              isDarkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No initiatives are tagged with "{selectedSkill}".
            </p>
            {onClearSkill && (
              <button
                onClick={onClearSkill}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer"
              >
                Clear Skill Filter
              </button>
            )}
          </div>
        ) : (
          /* Bento Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filtered.map((initiative, index) => {
              // Sizing logic adapts when filtered to single or dual items
              const isLarge = filtered.length <= 2 ? true : index === 0 || index === 3;
              const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

              return (
                <div
                  key={initiative.id}
                  onClick={() => setSelectedInitiative(initiative)}
                  className={`${colSpan} group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 ${
                    isDarkMode
                      ? 'bg-slate-800/90 border-slate-700 hover:border-emerald-500/50 hover:shadow-xl'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Media Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Corner indicator */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 backdrop-blur-md text-white border border-white/20 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    {/* Category & Organization tag overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1.5 font-medium">
                        {getCategoryIcon(initiative.category)}
                        <span className="font-semibold text-slate-100">{initiative.organization}</span>
                      </div>
                      <span className="text-slate-300 font-mono text-[11px]">{initiative.period}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {initiative.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {initiative.shortDesc}
                    </p>

                    {/* Key highlight outcome */}
                    <div className="pt-1 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{initiative.impactMetrics[0]}</span>
                    </div>

                    {/* Related skills tags */}
                    {initiative.skills && initiative.skills.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                        {initiative.skills.slice(0, 4).map((sk) => {
                          const isMatch = selectedSkill === sk;
                          return (
                            <span
                              key={sk}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onSelectSkill) onSelectSkill(isMatch ? '' : sk);
                              }}
                              className={`text-[10px] px-2 py-0.5 rounded font-medium transition-colors ${
                                isMatch
                                  ? 'bg-emerald-600 text-white font-semibold'
                                  : isDarkMode
                                  ? 'bg-slate-900/80 text-slate-300 border border-slate-700 hover:border-emerald-500'
                                  : 'bg-slate-100 text-slate-600 border border-slate-200 hover:border-emerald-500'
                              }`}
                            >
                              {sk}
                            </span>
                          );
                        })}
                        {initiative.skills.length > 4 && (
                          <span className="text-[10px] text-slate-400 self-center">
                            +{initiative.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal View */}
      <InitiativeModal
        initiative={selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};
