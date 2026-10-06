import React, { useEffect } from 'react';
import { CheckCircle2, Globe, Target, Users, X } from 'lucide-react';
import { InitiativeItem } from '../types/portfolio';

interface InitiativeModalProps {
  initiative: InitiativeItem | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export const InitiativeModal: React.FC<InitiativeModalProps> = ({
  initiative,
  onClose,
  isDarkMode,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!initiative) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all ${
          isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
          <img
            src={initiative.image}
            alt={initiative.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-slate-200 hover:text-white hover:bg-slate-900 border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on bottom of media banner */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              <span>{initiative.organization}</span>
              <span>·</span>
              <span>{initiative.period}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
              {initiative.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
              Executive Brief
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {initiative.fullDesc}
            </p>
          </div>

          {/* Strategic Objectives */}
          <div>
            <h4 className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
              <Target className="w-4 h-4" />
              <span>Core Strategic Objectives</span>
            </h4>
            <ul className="space-y-2">
              {initiative.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Metrics */}
          <div>
            <h4 className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Demonstrated Outcomes & Impact</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {initiative.impactMetrics.map((met, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border text-xs leading-relaxed ${
                    isDarkMode
                      ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  {met}
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Partners */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Cooperating Institutions:
            </span>
            {initiative.partners.map((p, idx) => (
              <span key={p} className="underline decoration-slate-300 dark:decoration-slate-700">
                {p}{idx < initiative.partners.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-4 border-t flex justify-end ${
            isDarkMode ? 'bg-slate-850 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-700 text-white hover:opacity-90 transition-opacity"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
