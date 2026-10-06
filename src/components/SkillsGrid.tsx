import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle,
  Cpu,
  FileSpreadsheet,
  Filter,
  Globe,
  Languages,
  Layers,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import {
  EXPERIENCES,
  INITIATIVES,
  LANGUAGES,
  SKILL_CATEGORIES,
  matchSkillOrProficiency,
} from '../data/portfolioData';

interface SkillsGridProps {
  isDarkMode: boolean;
  selectedSkill: string | null;
  onSelectSkill: (skillName: string | null) => void;
}

const PROFICIENCY_LEVELS = [
  { label: 'Full Professional / Fluent', code: 'Full Professional / Fluent', badge: 'English (C2)' },
  { label: 'Native / Bilingual', code: 'Native / Bilingual', badge: 'Urdu' },
  { label: 'Professional Working', code: 'Professional Working', badge: 'Punjabi' },
  { label: 'Elementary / Diplomatic Script', code: 'Elementary / Diplomatic Script', badge: 'Arabic' },
];

const SKILL_LEVELS = ['Advanced', 'Specialized', 'Mastery', 'Proficient'];

export const SkillsGrid: React.FC<SkillsGridProps> = ({
  isDarkMode,
  selectedSkill,
  onSelectSkill,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'language-proficiency' | 'skill-tier'>('all');

  const getCategoryIcon = (category: string) => {
    if (category.includes('International Relations')) {
      return <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
    if (category.includes('Strategic Communications')) {
      return <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
    return <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
  };

  const getMatchCounts = (filterVal: string) => {
    const expCount = EXPERIENCES.filter((e) => matchSkillOrProficiency(e.skills, filterVal)).length;
    const initCount = INITIATIVES.filter((i) => matchSkillOrProficiency(i.skills, filterVal)).length;
    return { expCount, initCount, total: expCount + initCount };
  };

  const activeMatches = selectedSkill ? getMatchCounts(selectedSkill) : null;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
              Methodological & Analytical Repertoire
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills, Languages & Portfolio Filter
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Filter portfolio appointments and field initiatives by individual technical skills,
              competency tiers, or diplomatic language proficiency levels.
            </p>
          </div>

          {selectedSkill && (
            <button
              onClick={() => onSelectSkill(null)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors self-start md:self-auto cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filter</span>
            </button>
          )}
        </div>

        {/* Quick Filter Mode Selector Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Filter Mode:</span>
          </span>

          <button
            onClick={() => {
              setFilterMode('all');
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : isDarkMode
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Competencies
          </button>

          <button
            onClick={() => setFilterMode('language-proficiency')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              filterMode === 'language-proficiency'
                ? 'bg-emerald-600 text-white shadow-xs'
                : isDarkMode
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>By Language Proficiency</span>
          </button>

          <button
            onClick={() => setFilterMode('skill-tier')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              filterMode === 'skill-tier'
                ? 'bg-emerald-600 text-white shadow-xs'
                : isDarkMode
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>By Skill Level</span>
          </button>
        </div>

        {/* Sub-Filters based on Active Mode */}
        {filterMode === 'language-proficiency' && (
          <div
            className={`mb-6 p-4 rounded-xl border flex flex-wrap items-center gap-2 animate-fade-in ${
              isDarkMode ? 'bg-slate-900/60 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mr-2">
              Select Language Proficiency Level:
            </span>
            {PROFICIENCY_LEVELS.map((prof) => {
              const isSelected = selectedSkill === prof.code;
              const matches = getMatchCounts(prof.code);

              return (
                <button
                  key={prof.code}
                  onClick={() => onSelectSkill(isSelected ? null : prof.code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/40'
                      : isDarkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-emerald-500'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-emerald-500 shadow-xs'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                  <span>{prof.label}</span>
                  <span className="text-[10px] opacity-75 font-mono">({prof.badge})</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10 ml-0.5">
                    {matches.total}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {filterMode === 'skill-tier' && (
          <div
            className={`mb-6 p-4 rounded-xl border flex flex-wrap items-center gap-2 animate-fade-in ${
              isDarkMode ? 'bg-slate-900/60 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mr-2">
              Select Technical Competency Tier:
            </span>
            {SKILL_LEVELS.map((lvl) => {
              const isSelected = selectedSkill === lvl;
              const matches = getMatchCounts(lvl);

              return (
                <button
                  key={lvl}
                  onClick={() => onSelectSkill(isSelected ? null : lvl)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/40'
                      : isDarkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-emerald-500'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-emerald-500 shadow-xs'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                  <span>Tier: {lvl}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10 ml-0.5">
                    {matches.total}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Active Filter Notification Bar */}
        {selectedSkill && activeMatches && (
          <div
            className={`mb-8 p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in ${
              isDarkMode
                ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-200'
                : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Filter className="w-3.5 h-3.5" />
              </span>
              <div className="text-xs sm:text-sm">
                <span>Active Filter: </span>
                <strong className="font-bold underline decoration-emerald-500">
                  {selectedSkill}
                </strong>
                <span className="text-xs opacity-85 ml-2">
                  ({activeMatches.expCount} Experience{activeMatches.expCount !== 1 ? 's' : ''},{' '}
                  {activeMatches.initCount} Initiative{activeMatches.initCount !== 1 ? 's' : ''} matched)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => scrollToSection('experience')}
                className="px-3 py-1 rounded-md font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
              >
                Jump to Experience ({activeMatches.expCount})
              </button>
              <button
                onClick={() => scrollToSection('initiatives')}
                className="px-3 py-1 rounded-md font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
              >
                Jump to Initiatives ({activeMatches.initCount})
              </button>
              <button
                onClick={() => onSelectSkill(null)}
                className="p-1 rounded hover:bg-emerald-200 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 transition-colors cursor-pointer"
                title="Clear active filter"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* 3-Column Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-slate-800/80 border-slate-700'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Item Cards with Click-to-Filter Action */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => {
                    const isSelected =
                      selectedSkill === skill.name ||
                      (selectedSkill && skill.level && selectedSkill.toLowerCase() === skill.level.toLowerCase());
                    const matches = getMatchCounts(skill.name);

                    return (
                      <div
                        key={sIdx}
                        onClick={() => onSelectSkill(selectedSkill === skill.name ? null : skill.name)}
                        className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                          isSelected
                            ? isDarkMode
                              ? 'bg-emerald-950/70 border-emerald-500 ring-2 ring-emerald-500/50 text-white shadow-md'
                              : 'bg-emerald-50/90 border-emerald-600 ring-2 ring-emerald-600/30 text-slate-900 shadow-sm'
                            : isDarkMode
                            ? 'bg-slate-900/50 border-slate-700/70 hover:border-slate-600 hover:bg-slate-850'
                            : 'bg-slate-50 border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/70'
                        }`}
                        title={`Click to filter experience and initiatives by ${skill.name}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            )}
                            <span
                              className={`font-semibold ${
                                isSelected
                                  ? 'text-emerald-700 dark:text-emerald-300'
                                  : 'text-slate-900 dark:text-white'
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {isSelected ? (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-600 text-white">
                                Filter Active
                              </span>
                            ) : (
                              skill.level && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectSkill(selectedSkill === skill.level ? null : (skill.level || null));
                                  }}
                                  className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-medium hover:underline cursor-pointer"
                                  title={`Filter by tier: ${skill.level}`}
                                >
                                  {skill.level}
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        {skill.context && (
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-between">
                            <span>{skill.context}</span>
                            <span className="text-[10px] font-mono text-slate-400 opacity-80">
                              {matches.total} linked
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>Click any item or tier to filter</span>
                <span className="font-mono">{selectedSkill ? 'Filtering ON' : 'All Visible'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            SPOKEN LANGUAGES & MULTILINGUAL DIPLOMATIC PROFICIENCY
           ======================================================== */}
        <div
          className={`mt-12 p-6 sm:p-8 rounded-2xl border transition-all ${
            isDarkMode
              ? 'bg-slate-800/80 border-slate-700'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Spoken Languages & Diplomatic Communication
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Multilingual fluency powering international multilateral negotiation, national policy
                  advocacy, and grassroots community mobilization.
                </p>
              </div>
            </div>

            <span className="self-start sm:self-auto text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              Click Any Language to Filter
            </span>
          </div>

          {/* Languages Cards Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LANGUAGES.map((lang, lIdx) => {
              const isLanguageSelected =
                selectedSkill === lang.name ||
                selectedSkill === lang.level ||
                (selectedSkill && lang.linkedSkills.includes(selectedSkill));

              return (
                <div
                  key={lIdx}
                  onClick={() => onSelectSkill(selectedSkill === lang.level ? null : lang.level)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isLanguageSelected
                      ? isDarkMode
                        ? 'bg-emerald-950/60 border-emerald-500 ring-2 ring-emerald-500/40 shadow-md'
                        : 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/30 shadow-xs'
                      : isDarkMode
                      ? 'bg-slate-900/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-900'
                      : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                  title={`Click to filter portfolio by ${lang.level} (${lang.name})`}
                >
                  <div>
                    {/* Top Row: Language Name & Native Script */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                          {lang.name}
                        </span>
                        <span className="text-xs text-slate-400 font-serif">
                          ({lang.nativeScript})
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lang.tagColor}`}>
                        {lang.level}
                      </span>
                    </div>

                    {/* 5-Dot Proficiency Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`h-1.5 flex-1 rounded-full ${
                            dot <= lang.scale
                              ? isLanguageSelected
                                ? 'bg-emerald-500'
                                : 'bg-emerald-600 dark:bg-emerald-400'
                              : isDarkMode
                              ? 'bg-slate-700'
                              : 'bg-slate-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* IR Application Focus */}
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                        IR Focus:
                      </span>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {lang.irApplication}
                      </p>
                    </div>

                    {/* Context description */}
                    <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                      {lang.description}
                    </p>
                  </div>

                  {/* Filter link bottom row */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Proficiency Filter:</span>
                    <span
                      className={`font-semibold ${
                        isLanguageSelected
                          ? 'text-emerald-600 dark:text-emerald-400 underline'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
