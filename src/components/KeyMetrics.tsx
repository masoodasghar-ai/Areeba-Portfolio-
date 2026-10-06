import React from 'react';
import { Award, BookOpen, Globe, Users } from 'lucide-react';
import { KEY_METRICS } from '../data/portfolioData';

interface KeyMetricsProps {
  isDarkMode: boolean;
}

export const KeyMetrics: React.FC<KeyMetricsProps> = ({ isDarkMode }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cgpa':
        return <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'un-women':
        return <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'wagggs':
        return <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section className="relative py-8 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
            Key Achievements & Global Milestone Metrics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className={`p-5 rounded-xl border transition-all hover:translate-y-[-2px] ${
                isDarkMode
                  ? 'bg-slate-800/80 border-slate-700/80 hover:border-emerald-500/40'
                  : 'bg-white border-slate-200/90 shadow-xs hover:border-emerald-600/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/40">
                  {getIcon(metric.id)}
                </span>
                <span className="text-[11px] font-mono tabular-nums text-slate-400 dark:text-slate-500">
                  Verified
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                  {metric.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
