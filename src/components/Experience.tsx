import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Filter,
  Globe2,
  MapPin,
  Sparkles,
  Tag,
  X,
} from 'lucide-react';
import { EXPERIENCES, matchSkillOrProficiency } from '../data/portfolioData';

interface ExperienceProps {
  isDarkMode: boolean;
  selectedSkill?: string | null;
  onClearSkill?: () => void;
  onSelectSkill?: (skill: string) => void;
  onOpenInitiativeDossier?: (id: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  isDarkMode,
  selectedSkill,
  onClearSkill,
  onSelectSkill,
  onOpenInitiativeDossier,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'global' | 'youth'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filtered = EXPERIENCES.filter((exp) => {
    const matchesCategory = activeFilter === 'all' || exp.category === activeFilter;
    const matchesSkill = matchSkillOrProficiency(exp.skills, selectedSkill);
    return matchesCategory && matchesSkill;
  });

  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
              Diplomatic & Grassroots Appointments
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Professional Experience
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mt-1">
              Representing youth voices in high-level multilateral forums, formulating policy briefs,
              and mobilizing community-level climate action.
            </p>
          </div>

          {/* Interactive filter segmented control */}
          <div
            className={`inline-flex items-center p-1 rounded-lg border self-start md:self-auto ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? isDarkMode
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Appointments
            </button>
            <button
              onClick={() => setActiveFilter('global')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'global'
                  ? isDarkMode
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Global Diplomacy
            </button>
            <button
              onClick={() => setActiveFilter('youth')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'youth'
                  ? isDarkMode
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Scout Leadership
            </button>
          </div>
        </div>

        {/* Skill Filter Active Notice */}
        {selectedSkill && (
          <div
            className={`mb-6 p-3.5 rounded-xl border flex items-center justify-between text-xs sm:text-sm animate-fade-in ${
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
                matching appointment{filtered.length !== 1 ? 's' : ''})
              </span>
            </div>
            {onClearSkill && (
              <button
                onClick={onClearSkill}
                className="flex items-center gap-1 font-semibold text-xs text-emerald-800 dark:text-emerald-300 hover:underline cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear Filter</span>
              </button>
            )}
          </div>
        )}

        {/* Empty state when no matches */}
        {filtered.length === 0 ? (
          <div
            className={`p-10 rounded-2xl border text-center space-y-3 ${
              isDarkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No appointments match the combined filter ({activeFilter} category + "{selectedSkill}").
            </p>
            <div className="flex justify-center gap-3">
              {selectedSkill && onClearSkill && (
                <button
                  onClick={onClearSkill}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer"
                >
                  Clear Skill Filter
                </button>
              )}
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Show All Categories
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Experience List */
          <div className="space-y-6">
            {filtered.map((item, index) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all ${
                    isDarkMode
                      ? 'bg-slate-800/80 border-slate-700 hover:border-slate-600'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {/* Header row */}
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                            0{index + 1}.
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                            {item.role}
                          </h3>
                          {item.badge && (
                            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <div className="text-base font-semibold text-slate-700 dark:text-slate-300">
                          {item.organization}
                        </div>

                        {/* Clean unboxed metadata with separators */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </div>
                          <span aria-hidden="true">·</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg border self-start lg:self-center transition-all cursor-pointer ${
                          isDarkMode
                            ? 'border-slate-700 hover:bg-slate-700 text-slate-200'
                            : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span>{isExpanded ? 'Collapse Details' : 'View Policy Brief'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.summary}
                    </p>

                    {/* Core Achievements bullet points */}
                    <div className="mt-5 space-y-2.5">
                      {item.achievements.map((ach, idx) => {
                        const [title, desc] = ach.includes(':') ? ach.split(':') : ['', ach];
                        return (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0 mt-2" />
                            <p className="text-slate-700 dark:text-slate-300 leading-normal">
                              {title ? (
                                <strong className="font-semibold text-slate-900 dark:text-white">
                                  {title}:
                                </strong>
                              ) : null}
                              {desc ? ` ${desc.trim()}` : ''}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Expandable policy deliverables drawer */}
                    {isExpanded && item.keyOutcomes && (
                      <div
                        className={`mt-6 pt-5 border-t space-y-3 ${
                          isDarkMode ? 'border-slate-700' : 'border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                          <FileCheck2 className="w-4 h-4" />
                          <span>Key Deliverables & Diplomatic Impact</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {item.keyOutcomes.map((outcome, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-3 rounded-lg border text-xs leading-relaxed ${
                                isDarkMode
                                  ? 'bg-slate-900/60 border-slate-700 text-slate-300'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Applied Skills Tags */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                        <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          <Tag className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span>Applied Competencies & Skills:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => {
                            const isMatch = selectedSkill === skill;
                            return (
                              <button
                                key={skill}
                                onClick={() =>
                                  onSelectSkill && onSelectSkill(isMatch ? '' : skill)
                                }
                                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                                  isMatch
                                    ? 'bg-emerald-600 text-white font-semibold ring-1 ring-emerald-500'
                                    : isDarkMode
                                    ? 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white'
                                    : 'bg-slate-100 border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-slate-900'
                                }`}
                                title={`Click to filter by ${skill}`}
                              >
                                {skill}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
