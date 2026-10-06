import React, { useState } from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
  TrendingUp,
  UserCheck,
} from 'lucide-react';

interface MilestoneData {
  id: string;
  year: number;
  yearLabel: string;
  category: 'academic' | 'leadership' | 'diplomatic';
  categoryLabel: string;
  level: number;
  levelLabel: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlight: string;
  badge: string;
  badgeColor: string;
  skills: string[];
}

const MILESTONES: MilestoneData[] = [
  {
    id: 'matric',
    year: 2020,
    yearLabel: '2019 – 2021',
    category: 'academic',
    categoryLabel: 'Academic Foundation',
    level: 1,
    levelLabel: 'Secondary Honors',
    title: 'Matriculation (Humanities)',
    institution: 'FG Sir Syed Girls Secondary School, Rawalpindi',
    period: '2019 – 2021',
    description:
      'Completed secondary education with high distinction, focusing on foundational humanities, history, and civics.',
    highlight: 'Grade A+ · Conferred Certificate of Appreciation and Academic Merit Scholarship',
    badge: 'Grade A+ Distinction',
    badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300',
    skills: ['Humanities Foundation', 'Academic Writing', 'Public Speaking'],
  },
  {
    id: 'hssc',
    year: 2022,
    yearLabel: '2021 – 2023',
    category: 'academic',
    categoryLabel: 'Higher Secondary',
    level: 2,
    levelLabel: 'Higher Secondary Honors',
    title: 'Intermediate (Humanities)',
    institution: 'FG Women Degree College, Rawalpindi',
    period: '2021 – 2023',
    description:
      'Specialized in international political systems, social sciences, and critical analysis. Graduated at the top of the cohort.',
    highlight: 'Grade A+ · Awarded Institutional Excellence Award & Academic Merit Cash Prize',
    badge: 'Excellence Award Winner',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
    skills: ['Political Systems', 'Analytical Logic', 'Civic Affairs'],
  },
  {
    id: 'pgga',
    year: 2023,
    yearLabel: '2022 – Present',
    category: 'leadership',
    categoryLabel: 'Grassroots Leadership',
    level: 3,
    levelLabel: 'National Youth Leadership',
    title: 'Young Leader (Volunteer)',
    institution: 'Pakistan Girl Guides Association (PGGA)',
    period: '2022 – Present',
    description:
      'Spearheaded large-scale volunteer campaigns in environmental sustainability, adolescent health education, and youth mobilization.',
    highlight: 'Simulated UN Women Country Rep · UNICEF Cervical Cancer Strategy · Plastic Tide Turner Lead',
    badge: 'UN Girls Takeover 2025',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
    skills: ['Community Mobilization', 'UNICEF Health Strategy', 'Environmental Action'],
  },
  {
    id: 'bsir',
    year: 2024.5,
    yearLabel: '2023 – Present',
    category: 'academic',
    categoryLabel: 'Higher Education',
    level: 4,
    levelLabel: 'Undergraduate IR Scholar',
    title: 'BS International Relations (Final Year)',
    institution: 'Fatima Jinnah Women University, Rawalpindi',
    period: '2023 – Present',
    description:
      'Rigorous academic research in foreign policy analysis, multilateral diplomacy, climate governance, and international law.',
    highlight: 'CGPA 3.43 / 4.00 · Punjab Educational Endowment Fund (PEEF) Scholarship Recipient',
    badge: 'PEEF Merit Scholar (3.43)',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300',
    skills: ['Foreign Policy Analysis', 'Climate Governance', 'Multilateral Diplomacy'],
  },
  {
    id: 'wagggs',
    year: 2025.5,
    yearLabel: 'Dec 2025 – Present',
    category: 'diplomatic',
    categoryLabel: 'Multilateral Diplomacy',
    level: 5,
    levelLabel: 'Global Policy Advocacy',
    title: 'Global Advocate',
    institution: 'WAGGGS UK (World Association of Girl Guides and Girl Scouts)',
    period: 'December 2025 – Present',
    description:
      'Representing international youth in top-tier policy dialogues, including the UN Women CSW70 Virtual Youth Forum.',
    highlight: 'Featured Speaker at UN Women CSW70 Forum · Greening the Future Tree Plantation Lead',
    badge: 'UN Women CSW70 Youth Forum',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300',
    skills: ['UN Policy Briefs', 'Multilateral Speaking', 'Climate Justice'],
  },
  {
    id: 'target',
    year: 2026.2,
    yearLabel: '2026 Target',
    category: 'diplomatic',
    categoryLabel: 'Career Horizon',
    level: 5.5,
    levelLabel: 'Diplomatic Fellowship',
    title: 'Policy Research & Diplomatic Fellowship',
    institution: 'Multilateral Think Tanks & Foreign Affairs Organizations',
    period: 'Available Immediately (2026)',
    description:
      'Ready to apply academic acumen and grassroots advocacy leadership to impactful foreign policy research and diplomatic initiatives.',
    highlight: 'Seeking Competitive Internships in Foreign Policy Analysis, Climate Governance, and Multilateral Affairs',
    badge: 'Immediate Availability',
    badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300',
    skills: ['Policy Formulation', 'Diplomatic Communication', 'Impact Research'],
  },
];

interface MilestoneTimelineProps {
  isDarkMode: boolean;
}

export const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'leadership' | 'diplomatic'>('all');
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneData>(MILESTONES[4]); // Defaults to WAGGGS Global Advocate

  const filteredMilestones = MILESTONES.filter(
    (m) => activeCategory === 'all' || m.category === activeCategory
  );

  const chartData = MILESTONES.map((m) => ({
    ...m,
    activeLevel: activeCategory === 'all' || m.category === activeCategory ? m.level : null,
  }));

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'academic':
        return '#0284c7'; // Sky Blue
      case 'leadership':
        return '#059669'; // Emerald
      case 'diplomatic':
        return '#7c3aed'; // Purple/Indigo
      default:
        return '#0f766e';
    }
  };

  const CustomTooltipContent = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data: MilestoneData = payload[0].payload;
      return (
        <div
          className={`p-3.5 rounded-xl border shadow-xl text-xs max-w-xs ${
            isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: getCategoryColor(data.category) }}
            >
              {data.categoryLabel}
            </span>
            <span className="font-mono text-[11px] text-slate-400 font-semibold">{data.yearLabel}</span>
          </div>
          <h4 className="font-bold text-sm leading-snug mt-1">{data.title}</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-1.5">{data.institution}</p>
          <p className="text-[11px] leading-relaxed line-clamp-2 text-slate-600 dark:text-slate-300">
            {data.highlight}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="timeline" className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Chronological Milestones & Trajectory
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Interactive timeline visualizing Areeba Sajjid's progression from secondary distinction to
              international diplomatic forums and climate governance leadership.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div
            className={`inline-flex items-center p-1 rounded-xl border self-start md:self-auto ${
              isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? isDarkMode
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveCategory('academic')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'academic'
                  ? isDarkMode
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Academic
            </button>
            <button
              onClick={() => setActiveCategory('leadership')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'leadership'
                  ? isDarkMode
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveCategory('diplomatic')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'diplomatic'
                  ? isDarkMode
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Diplomacy
            </button>
          </div>
        </div>

        {/* Visual Chart Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-all mb-8 ${
            isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          {/* Chart Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  Career Acceleration Curve (2019 – 2026)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Click any data node on the timeline curve to inspect detailed appointments and outcomes.
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                Academic
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Leadership
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                Diplomacy
              </span>
            </div>
          </div>

          {/* Recharts Composed Chart */}
          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={chartData}
                margin={{ top: 20, right: 30, left: -10, bottom: 10 }}
                onClick={(e: any) => {
                  if (e && e.activePayload && e.activePayload[0]) {
                    setSelectedMilestone(e.activePayload[0].payload);
                  }
                }}
              >
                <defs>
                  <linearGradient id="trajectoryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#0284c7" stopOpacity={0.0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={isDarkMode ? '#334155' : '#e2e8f0'}
                  vertical={false}
                />

                <XAxis
                  dataKey="year"
                  type="number"
                  domain={[2019, 2026.5]}
                  ticks={[2020, 2022, 2023, 2024.5, 2025.5, 2026.2]}
                  tickFormatter={(val) => {
                    if (val === 2020) return '2019-21';
                    if (val === 2022) return '2021-23';
                    if (val === 2023) return '2022-Pres';
                    if (val === 2024.5) return '2023-Pres';
                    if (val === 2025.5) return '2025-Pres';
                    if (val === 2026.2) return '2026 Target';
                    return String(val);
                  }}
                  tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b', fontSize: 11 }}
                  axisLine={{ stroke: isDarkMode ? '#475569' : '#cbd5e1' }}
                  tickLine={{ stroke: isDarkMode ? '#475569' : '#cbd5e1' }}
                />

                <YAxis
                  dataKey="level"
                  domain={[0.5, 6]}
                  ticks={[1, 2, 3, 4, 5, 5.5]}
                  tickFormatter={(lvl) => {
                    if (lvl === 1) return 'Secondary';
                    if (lvl === 2) return 'College';
                    if (lvl === 3) return 'National';
                    if (lvl === 4) return 'Bachelors';
                    if (lvl === 5) return 'Global Rep';
                    if (lvl === 5.5) return 'Fellowship';
                    return '';
                  }}
                  tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b', fontSize: 10 }}
                  axisLine={{ stroke: isDarkMode ? '#475569' : '#cbd5e1' }}
                  tickLine={{ stroke: isDarkMode ? '#475569' : '#cbd5e1' }}
                />

                <Tooltip content={<CustomTooltipContent />} />

                {/* Trajectory smooth Area */}
                <Area
                  type="monotone"
                  dataKey="level"
                  stroke="#059669"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#trajectoryGradient)"
                />

                {/* Line overlay with styled active markers */}
                <Line
                  type="monotone"
                  dataKey="level"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={(props: any) => {
                    const { cx, cy, payload } = props;
                    const isSelected = selectedMilestone?.id === payload.id;
                    const color = getCategoryColor(payload.category);

                    return (
                      <circle
                        key={payload.id}
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 8 : 6}
                        fill={color}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? 3 : 2}
                        className="cursor-pointer transition-all hover:scale-125"
                      />
                    );
                  }}
                  activeDot={{ r: 9, stroke: '#ffffff', strokeWidth: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Selected Milestone Interactive Inspection Card */}
        {selectedMilestone && (
          <div
            className={`p-6 sm:p-7 rounded-2xl border transition-all animate-fade-in ${
              isDarkMode
                ? 'bg-slate-800/90 border-slate-700 shadow-xl'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700/60">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: getCategoryColor(selectedMilestone.category) }}
                  >
                    {selectedMilestone.categoryLabel}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${selectedMilestone.badgeColor}`}>
                    {selectedMilestone.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedMilestone.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {selectedMilestone.institution}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-auto text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{selectedMilestone.period}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
              {/* Left description */}
              <div className="lg:col-span-8 space-y-3">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedMilestone.description}
                </p>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm">
                  <strong className="font-bold text-emerald-900 dark:text-emerald-200 block mb-0.5">
                    Key Impact & Achievement:
                  </strong>
                  <span className="text-emerald-800 dark:text-emerald-300">
                    {selectedMilestone.highlight}
                  </span>
                </div>
              </div>

              {/* Right Applied Skills Chips */}
              <div className="lg:col-span-4 space-y-2 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700/60 lg:pl-6 pt-4 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Relevant Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMilestone.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] px-2.5 py-1 rounded-md font-medium ${
                        isDarkMode
                          ? 'bg-slate-900 text-slate-300 border border-slate-700'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Horizontal Mini-Card Timeline Nav */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MILESTONES.map((m) => {
            const isSelected = selectedMilestone?.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMilestone(m)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? isDarkMode
                      ? 'bg-slate-800 border-emerald-500 ring-2 ring-emerald-500/40 shadow-md'
                      : 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/30 shadow-sm'
                    : isDarkMode
                    ? 'bg-slate-800/40 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                    : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-1">
                  <span>{m.yearLabel}</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: getCategoryColor(m.category) }}
                  />
                </div>
                <h4
                  className={`text-xs font-bold truncate ${
                    isSelected
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {m.title}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {m.institution}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
