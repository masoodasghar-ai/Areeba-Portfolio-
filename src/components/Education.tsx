import React from 'react';
import { Award, BookOpen, GraduationCap, MapPin, Trophy } from 'lucide-react';
import { EDUCATION_DATA, HONORS_AWARDS } from '../data/portfolioData';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className="py-16 lg:py-24 bg-slate-100/60 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
            Academic Pedigree & Honors
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Academic Distinction
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Rigorous undergraduate studies in International Relations coupled with a consistent
            track record of academic excellence scholarships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={edu.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  isDarkMode
                    ? 'bg-slate-800/80 border-slate-700'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50 self-start sm:self-auto">
                    {edu.grade}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                  <span>{edu.period}</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Honors */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                  {edu.honors.map((honor, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>

                {/* Relevant courses if present */}
                {edu.courses && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                      Core Research Coursework
                    </span>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {edu.courses.map((course, cIdx) => (
                        <React.Fragment key={course}>
                          <span>{course}</span>
                          {cIdx < edu.courses!.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Honors & Competitive Merit Awards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Competitive Honors & Grants
              </h3>
            </div>

            <div className="space-y-3.5">
              {HONORS_AWARDS.map((award, aIdx) => (
                <div
                  key={aIdx}
                  className={`p-4 rounded-xl border transition-all ${
                    isDarkMode
                      ? 'bg-slate-800/60 border-slate-700 text-slate-200'
                      : 'bg-white border-slate-200 text-slate-800 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-xs sm:text-sm leading-snug">
                      {award.title}
                    </h4>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 shrink-0">
                      {award.year}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {award.organization}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {award.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
