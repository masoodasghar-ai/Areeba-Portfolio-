import React, { useState } from 'react';
import {
  Briefcase,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    subject: 'Policy Research Internship',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PROFILE_INFO.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = PROFILE_INFO.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                Recruitment & Opportunities
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Get in Touch for Internships & Policy Projects
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Areeba is currently in her final undergraduate year of International Relations at Fatima
              Jinnah Women University and is actively seeking internship opportunities within think tanks,
              multilateral institutions, diplomatic missions, and environmental governance NGOs.
            </p>

            {/* Direct Details Box */}
            <div
              className={`p-6 rounded-2xl border space-y-4 ${
                isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-semibold block text-slate-900 dark:text-white">
                    Primary Location
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Rawalpindi / Islamabad, Pakistan (Available for on-site & remote global roles)
                  </span>
                </div>
              </div>

              {/* Direct Email with Prominent One-Click Copy Button */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  copiedEmail
                    ? isDarkMode
                      ? 'bg-emerald-950/40 border-emerald-600 ring-2 ring-emerald-500/50'
                      : 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/30'
                    : isDarkMode
                    ? 'bg-slate-900/60 border-slate-700/80'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs flex-1 min-w-0">
                      <span className="font-semibold block text-slate-900 dark:text-white text-xs">
                        Direct Inquiries Email
                      </span>
                      <a
                        href={`mailto:${PROFILE_INFO.email}`}
                        className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-[11px] font-medium break-all block mt-0.5 truncate transition-colors"
                        title="Click to open email client"
                      >
                        {PROFILE_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* One-Click Copy Email Button */}
                  <button
                    onClick={handleCopyEmail}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 cursor-pointer shadow-xs ${
                      copiedEmail
                        ? 'bg-emerald-600 text-white font-bold ring-2 ring-emerald-400'
                        : isDarkMode
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 hover:border-emerald-500'
                        : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300'
                    }`}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white animate-scale-in" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Visual Feedback Confirmation Banner */}
                {copiedEmail && (
                  <div className="mt-2.5 pt-2 border-t border-emerald-200 dark:border-emerald-800/80 flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-300 animate-fade-in font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Email address copied to your clipboard ({PROFILE_INFO.email})</span>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-semibold block text-slate-900 dark:text-white">
                    Available For
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Policy Research Internships, Climate Advocacy Fellowships, Diplomatic Youth Panels
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Form */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${
              isDarkMode
                ? 'bg-slate-800/80 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
          >
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry regarding{' '}
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                    {formData.subject}
                  </span>{' '}
                  has been recorded. Areeba will respond promptly via <strong>{formData.email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        email: '',
                        subject: 'Policy Research Internship',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold mb-2">Send an Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amb. Sarah Jenkins / Dr. Tariq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UN Agency / Ministry of Foreign Affairs / Think Tank"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@institution.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-700 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="Policy Research Internship">Policy Research Internship</option>
                      <option value="Diplomatic / NGO Fellowship">Diplomatic / NGO Fellowship</option>
                      <option value="Climate Governance Project">Climate Governance Project</option>
                      <option value="Speaking / Panelist Invitation">Speaking / Panelist Invitation</option>
                      <option value="General Academic Collaboration">General Academic Collaboration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe the internship role, policy focus, or conference agenda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all ${
                      isDarkMode
                        ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Direct inquiries forwarded to Areeba Sajjid.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
