import { ExperienceItem, InitiativeItem, EducationItem, CompetencyItem, SkillCategory } from '../types/portfolio';

// Local generated image assets
export const IMAGES = {
  portrait: '/src/assets/images/areeba_sajjid_portrait_1790626378331.jpg',
  formalPortrait: '/src/assets/images/areeba_formal_portrait_1790659081237.jpg',
  diplomacy: '/src/assets/images/un_youth_diplomacy_forum_1790626390289.jpg',
  greening: '/src/assets/images/greening_the_future_initiative_1790626402392.jpg',
  plastic: '/src/assets/images/plastic_tide_turner_campaign_1790626417165.jpg',
};

export const PROFILE_INFO = {
  name: 'Areeba Sajjid',
  title: 'BS Student for International Relations Final Year',
  tagline: 'Bridging Multilateral Diplomacy, Grassroots Climate Governance & Foreign Policy Research',
  location: 'H. No 651-A, Dhok Ratta, Rawalpindi, Pakistan',
  status: 'Final-Year Undergraduate Student · Seeking Policy Research & Global Affairs Internships',
  email: 'areebasajid378@gmail.com',
  phone: '+92-340-5659811',
  whatsapp: '0340-5659811',
  address: 'H. No 651-A, Dhok Ratta, Rawalpindi, Pakistan',
  linkedin: 'https://linkedin.com/in/areeba-sajjid-ir',
  summary: `Final-year International Relations student with a proven track record in international politics, foreign policy analysis, and climate governance. Experienced in representing youth voices at premier global platforms, including UN Women forums. Possesses advanced skills in policy research, strategic communication, and community mobilization. Seeking an internship opportunity to leverage academic insights and contribute to impactful policy research initiatives.`,
};

export const KEY_METRICS = [
  {
    id: 'cgpa',
    value: '3.43 / 4.0',
    label: 'Academic Standing',
    subtext: 'Fatima Jinnah Women University · PEEF Merit Scholar',
  },
  {
    id: 'un-women',
    value: 'UN Country Rep',
    label: 'Diplomatic Simulation',
    subtext: 'Stepped into UN Women Country Rep role (UN Girls Takeover 2025)',
  },
  {
    id: 'wagggs',
    value: 'Global Advocate',
    label: 'WAGGGS UK Delegation',
    subtext: 'Youth Representative at UN Women CSW70 & Global Dialogues',
  },
  {
    id: 'initiatives',
    value: '4+ High-Impact Drives',
    label: 'Campaign Mobilization',
    subtext: 'Afforestation, Plastic Mitigation, Cancer Health & Youth Action',
  },
];

export const CORE_COMPETENCIES: CompetencyItem[] = [
  {
    id: 'foreign-policy',
    title: 'Foreign Policy & Geopolitical Analysis',
    description: 'Investigating state interactions, multilateral alliances, and diplomatic negotiation protocols across South Asia and global governance architectures.',
    subfields: ['Multilateral Treaty Frameworks', 'Bilateral Diplomacy', 'Regional Security Analysis', 'Geopolitical Risk Evaluation'],
  },
  {
    id: 'climate-governance',
    title: 'Climate Governance & Environmental Justice',
    description: 'Leading grassroots mitigation campaigns and linking youth climate vulnerabilities with international adaptation mechanisms and SDG 13.',
    subfields: ['Native Biodiversity Conservation', 'Urban Afforestation', 'Circular Economy & Plastic Abatement', 'Grassroots Climate Mobilization'],
  },
  {
    id: 'gender-youth',
    title: 'Gender Equality & Youth Representation',
    description: 'Advancing women’s leadership in multilateral policy dialogues (CSW70) and formulating inclusive youth engagement models.',
    subfields: ['UN Women CSW70 Engagement', 'Girls Leadership in STEM & Ecology', 'Adolescent Health Advocacy', 'Digital Equity for Young Women'],
  },
  {
    id: 'policy-drafting',
    title: 'Policy Research & Legislative Gap Analysis',
    description: 'Synthesizing primary academic research into actionable policy briefs for senior decision-makers and non-governmental stakeholders.',
    subfields: ['Grassroots-to-Policy Bridge', 'Legislative Evaluation', 'Qualitative Policy Inquiry', 'Stakeholder Mapping'],
  },
  {
    id: 'strategic-comm',
    title: 'Strategic Diplomacy & Public Speaking',
    description: 'Serving as virtual panelist and orator in international side events and diplomatic simulations advocating for institutional accountability.',
    subfields: ['UN Simulation Protocols', 'High-Level Panel Moderation', 'Cross-Cultural Advocacy', 'Keynote Address Delivery'],
  },
  {
    id: 'community-mobilization',
    title: 'Community Mobilization & Grassroots Outreach',
    description: 'Designing and executing localized, volunteer-driven interventions addressing public health, environmental hygiene, and civic youth empowerment.',
    subfields: ['Volunteer Troop Leadership', 'Cross-Functional Team Coordination', 'UNICEF Public Health Drives', 'Community Stakeholder Buy-in'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'wagggs-global-advocate',
    role: 'Global Advocate',
    organization: 'WAGGGS UK (World Association of Girl Guides and Girl Scouts)',
    location: 'London, UK / Remote & Global Forums',
    period: 'December 2025 – Present',
    category: 'global',
    badge: 'Current Appointment',
    summary: 'Selected into the competitive cohort of Global Advocates representing 10 million girl guides and girl scouts worldwide across premier international forums.',
    achievements: [
      'Global Policy Representation: Represented youth perspectives in high-level international policy dialogues, including the UN Women CSW70 Virtual Youth Forum.',
      'Public Speaking & Panelist Roles: Served as a featured panelist and speaker for virtual side events addressing the critical intersections of climate justice, gender equality, and digital technology inclusion.',
      'Environmental Leadership: Championed and executed the "Greening the Future" initiative, a community-based tree plantation drive in Rawalpindi focused on native biodiversity and women’s environmental leadership.',
      'Policy Reporting: Drafted comprehensive policy briefs and advocacy communications for senior stakeholders, highlighting implementation gaps between national legislation and grassroots realities for women.',
      'Campaign Coordination: Coordinated international advocacy campaigns smoothly alongside global trainers and cross-functional communications teams.',
    ],
    keyOutcomes: [
      'Contributed youth recommendations to UN Women CSW70 consultation papers',
      'Planted native saplings across targeted Rawalpindi community spaces',
      'Co-moderated digital youth panels with international speakers',
    ],
    tags: ['UN Women CSW70', 'Climate Justice', 'Policy Briefs', 'WAGGGS UK', 'Youth Advocacy'],
    skills: [
      'Foreign Policy Analysis',
      'Policy Brief Drafting',
      'Climate Governance',
      'Multilateral Diplomacy',
      'Qualitative Research',
      'Public Speaking & Oratory',
      'Strategic Advocacy',
      'Cross-Cultural Teamwork',
      'Stakeholder Engagement',
      'Digital Collaboration Tools',
      'ChatGPT & AI-Assisted Research',
      'Information Synthesis',
    ],
  },
  {
    id: 'pgga-young-leader',
    role: 'Young Leader (Volunteer)',
    organization: 'Pakistan Girl Guides Association (PGGA)',
    location: 'Rawalpindi / Islamabad, Pakistan',
    period: '2022 – Present',
    category: 'youth',
    badge: 'Leadership Track',
    summary: 'Long-term volunteer leader within Pakistan’s premier scouting body, spearheading nationwide environmental, public health, and diplomatic initiatives.',
    achievements: [
      'UN Diplomatic Simulation: Selected to step into the role of a UN Women Country Representative during the UN Girls Takeover 2025 framework, simulating country-level diplomatic governance.',
      'Public Health Advocacy: Collaborated closely with UNICEF to design and implement policy-making and advocacy strategies for cervical cancer awareness and HPV vaccination prevention.',
      'Climate & Sustainability Action: Managed the "Plastic Tide Turner Project," orchestrating grassroots awareness campaigns to mitigate single-use plastic pollution across regional youth networks.',
      'Community Mobilization: Contributed actively to the Global Youth Mobilization project, designing localized interventions to empower youth and resolve critical community issues.',
    ],
    keyOutcomes: [
      'Successfully delivered diplomatic addresses as UN Women Country Rep during Girls Takeover',
      'Reached hundreds of young girls and mothers with cervical health guidance in partnership with UNICEF',
      'Trained young guides in plastic waste auditing and circular lifestyle habits',
    ],
    tags: ['UN Girls Takeover 2025', 'UNICEF Health Strategy', 'Plastic Tide Turner', 'Community Mobilization'],
    skills: [
      'Multilateral Diplomacy',
      'Policy Brief Drafting',
      'Climate Governance',
      'Community Mobilization',
      'Strategic Advocacy',
      'Stakeholder Engagement',
      'Qualitative Research',
      'Microsoft Office Suite',
      'Cross-Cultural Teamwork',
      'Public Speaking & Oratory',
    ],
  },
];

export const INITIATIVES: InitiativeItem[] = [
  {
    id: 'un-csw70-forum',
    title: 'UN Women CSW70 Virtual Youth Dialogue & Policy Representation',
    organization: 'WAGGGS UK & UN Women',
    period: '2025 – 2026',
    category: 'diplomacy',
    image: IMAGES.diplomacy,
    shortDesc: 'Youth advocacy delegation championing gender equality, digital accessibility, and climate resilience in multilateral policy draft recommendations.',
    fullDesc: `Representing the World Association of Girl Guides and Girl Scouts (WAGGGS) at the UN Women Commission on the Status of Women (CSW70) preparatory dialogues. Areeba spoke on high-level youth panels, presenting grassroots findings on how climate disruptions disproportionately affect women and girls in developing economies. She worked on drafting collaborative recommendations emphasizing digital equity and targeted funding for community-level adaptation initiatives.`,
    objectives: [
      'Synthesize grassroots challenges into actionable policy briefs for multilateral delegates',
      'Deliver keynote contributions at virtual side events on gender-climate nexus',
      'Coordinate with global youth advocates across 5 continents to present unified resolutions',
    ],
    impactMetrics: [
      'Featured panel speaker in CSW70 youth dialogues',
      'Contributed directly to WAGGGS Global youth policy declaration',
      'Strengthened youth visibility in international climate justice discourse',
    ],
    partners: ['UN Women', 'WAGGGS UK', 'Pakistan Girl Guides Association'],
    skills: [
      'Multilateral Diplomacy',
      'Foreign Policy Analysis',
      'Policy Brief Drafting',
      'Public Speaking & Oratory',
      'Strategic Advocacy',
      'Cross-Cultural Teamwork',
      'Digital Collaboration Tools',
      'Information Synthesis',
      'Climate Governance',
    ],
  },
  {
    id: 'greening-the-future',
    title: '"Greening the Future" Native Tree Plantation Initiative',
    organization: 'WAGGGS UK & Rawalpindi Community Network',
    period: '2025 – 2026',
    category: 'climate',
    image: IMAGES.greening,
    shortDesc: 'Urban afforestation drive in Rawalpindi championing native biodiversity and women-led environmental stewardship.',
    fullDesc: `Conceived, pitched, and executed as a flagship climate action under the WAGGGS Global Advocate framework. The "Greening the Future" initiative tackled urban heat island effects and localized environmental degradation in Rawalpindi by mobilizing young women to plant native tree species. Beyond planting, the project established long-term community stewardship agreements to ensure high sapling survival rates and educate local families on water conservation.`,
    objectives: [
      'Plant indigenous flora to enhance urban biodiversity and resist regional heat stress',
      'Position young female volunteers at the vanguard of municipal climate action',
      'Promote environmental literacy among local school students and civic leaders',
    ],
    impactMetrics: [
      'Scores of native tree saplings planted and monitored in Rawalpindi public areas',
      'Over 50 young volunteers mobilized and trained in ecological preservation',
      'Drafted community sustainability guidelines shared with regional municipal bodies',
    ],
    partners: ['WAGGGS', 'Local Municipal Council', 'PGGA Regional Branches'],
    skills: [
      'Climate Governance',
      'Community Mobilization',
      'Stakeholder Engagement',
      'Strategic Advocacy',
      'Cross-Cultural Teamwork',
      'Public Speaking & Oratory',
    ],
  },
  {
    id: 'plastic-tide-turner',
    title: 'The "Plastic Tide Turner" Grassroots Mitigation Project',
    organization: 'Pakistan Girl Guides Association & UNEP Global Challenge',
    period: '2023 – 2024',
    category: 'climate',
    image: IMAGES.plastic,
    shortDesc: 'Mobilizing hundreds of youth scouts to audit plastic waste, eliminate single-use plastics, and foster circular consumer habits.',
    fullDesc: `A nationwide campaign implemented at regional scout chapters to curb plastic waste at its source. Areeba led curriculum delivery, field audits, and youth challenges that empowered guides to identify single-use plastics in their homes, schools, and community centers, replacing them with sustainable alternatives and initiating recycling partnerships.`,
    objectives: [
      'Conduct community waste audits to measure single-use plastic consumption rates',
      'Deliver interactive workshops on ocean health and microplastic pollution',
      'Create school-wide zero-waste pledges and sustainable material swaps',
    ],
    impactMetrics: [
      'Engaged over 200+ young students across multiple workshops',
      'Diverted significant volumes of plastic waste through organized clean-up drives',
      'Awarded badges to certified Tide Turner champions in Rawalpindi',
    ],
    partners: ['PGGA', 'UNEP Clean Seas', 'World Scouting / WAGGGS'],
    skills: [
      'Climate Governance',
      'Community Mobilization',
      'Stakeholder Engagement',
      'Strategic Advocacy',
      'Information Synthesis',
      'Microsoft Office Suite',
    ],
  },
  {
    id: 'unicef-cervical-cancer',
    title: 'Cervical Cancer Awareness & Public Health Policy Strategy',
    organization: 'UNICEF & Pakistan Girl Guides Association',
    period: '2024 – 2025',
    category: 'health',
    image: IMAGES.portrait,
    shortDesc: 'Designing and executing health advocacy communication strategies to destigmatize cervical cancer and advocate for HPV preventative immunization.',
    fullDesc: `In partnership with UNICEF, Areeba contributed to crafting sensitive, community-tailored advocacy materials to overcome social taboos surrounding reproductive health and cervical cancer screening. The campaign focused on educating young women and mothers on early detection, HPV immunization awareness, and systemic policy improvements needed in Pakistan's primary healthcare infrastructure.`,
    objectives: [
      'Dismantle stigma around reproductive cancers through culturally respectful dialogue',
      'Formulate policy-level recommendations for school-based preventative healthcare',
      'Train peer educators to disseminate lifesaving early-screening guidelines',
    ],
    impactMetrics: [
      'Direct educational outreach to vulnerable female demographic cohorts',
      'Drafted recommendations submitted to youth healthcare consultative groups',
      'Awarded distinction for empathetic community leadership by PGGA',
    ],
    partners: ['UNICEF Pakistan', 'Pakistan Girl Guides Association', 'Health NGOs'],
    skills: [
      'Policy Brief Drafting',
      'Strategic Advocacy',
      'Community Mobilization',
      'Stakeholder Engagement',
      'Qualitative Research',
      'Microsoft Office Suite',
      'Information Synthesis',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'fjwu-ir',
    degree: 'Bachelors of International Relations',
    institution: 'Fatima Jinnah Women University',
    location: 'Rawalpindi, Pakistan',
    period: '2023 – Present',
    grade: 'CGPA 3.43 / 4.00 (Final-Year Undergraduate)',
    honors: [
      'Recipient of the Punjab Educational Endowment Fund (PEEF) Scholarship — Prestigious competitive merit-based provincial award',
      'Consistently ranked at the top percentile of the International Relations department',
      'Core focus areas: Foreign Policy Analysis, International Law, Geopolitics of South Asia, and Environmental Governance',
    ],
    courses: [
      'Foreign Policy Analysis',
      'International Law & Organizations',
      'Climate Governance & Geopolitics',
      'Research Methodology & Policy Briefing',
      'Diplomacy & Conflict Resolution',
      'Public International Policy',
    ],
  },
  {
    id: 'fg-college',
    degree: 'Intermediate (Humanities)',
    institution: 'FG Women Degree College',
    location: 'Rawalpindi, Pakistan',
    period: '2021 – 2023',
    grade: 'Grade A+ (Distinction)',
    honors: [
      'Recipient of the Institutional Excellence Award',
      'Awarded prestigious Academic Merit Cash Prize for top board performance',
      'Active participant in inter-college debates and literary societies',
    ],
  },
  {
    id: 'fg-school',
    degree: 'Matriculation (Humanities)',
    institution: 'FG Sir Syed Girls Secondary School',
    location: 'Rawalpindi, Pakistan',
    period: '2019 – 2021',
    grade: 'Grade A+ (Distinction)',
    honors: [
      'Awarded Certificate of Appreciation for outstanding academic achievement',
      'Recipient of Academic Merit Scholarship',
      'Elected to school prefect council and Girl Guides regional troop',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'International Relations & Policy Research',
    description: 'Academic and practical foundations in global affairs, diplomacy, and analytical evaluation.',
    skills: [
      { name: 'Foreign Policy Analysis', level: 'Advanced', context: 'Geopolitics & Bilateral Treaties' },
      { name: 'Policy Brief Drafting', level: 'Advanced', context: 'Executive Summaries & Legislative Gaps' },
      { name: 'Climate Governance', level: 'Specialized', context: 'UNFCCC & Grassroots Action' },
      { name: 'Multilateral Diplomacy', level: 'Practiced', context: 'UN Simulations & CSW70 Representation' },
      { name: 'Qualitative Research', level: 'Proficient', context: 'Case Studies & Literature Synthesis' },
    ],
  },
  {
    category: 'Strategic Communications & Advocacy',
    description: 'Empowering communities and amplifying youth perspectives across diverse cultural forums.',
    skills: [
      { name: 'Public Speaking & Oratory', level: 'Featured', context: 'International virtual panels & side events' },
      { name: 'Strategic Advocacy', level: 'Advanced', context: 'WAGGGS & UN Women Youth Campaigns' },
      { name: 'Community Mobilization', level: 'Demonstrated', context: 'Hundreds of youth volunteers mobilized' },
      { name: 'Cross-Cultural Teamwork', level: 'Proven', context: 'Collaboration with global trainers from 50+ countries' },
      { name: 'Stakeholder Engagement', level: 'Proficient', context: 'NGOs, UN bodies & Municipal administrators' },
    ],
  },
  {
    category: 'Software, AI & Analytical Toolkit',
    description: 'Digital tools for modern policy formulation, documentation, and data-driven insight.',
    skills: [
      { name: 'Microsoft Office Suite', level: 'Mastery', context: 'Word, PowerPoint (Presentations), Excel' },
      { name: 'ChatGPT & AI-Assisted Research', level: 'Proficient', context: 'Advanced prompt structuring, synthesis & briefing' },
      { name: 'Digital Collaboration Tools', level: 'Advanced', context: 'Zoom, MS Teams, Google Workspace, Slack' },
      { name: 'Information Synthesis', level: 'Rapid', context: 'Fast assimilation of dense policy documents' },
    ],
  },
];

export const HONORS_AWARDS = [
  {
    title: 'Punjab Educational Endowment Fund (PEEF) Scholarship',
    organization: 'Government of Punjab',
    year: '2023 – Present',
    details: 'Awarded on academic merit for undergraduate studies in International Relations at Fatima Jinnah Women University.',
  },
  {
    title: 'Excellence Award & Merit Cash Prize',
    organization: 'FG Women Degree College, Rawalpindi',
    year: '2023',
    details: 'Awarded for securing Grade A+ distinction in Intermediate Humanities board examinations.',
  },
  {
    title: 'UN Girls Takeover 2025: UN Women Country Representative',
    organization: 'Plan International & UN Women Simulation',
    year: '2025',
    details: 'Selected through competitive evaluation to simulate the high-level role of UN Women Country Representative in Pakistan.',
  },
  {
    title: 'Certificate of Appreciation & Academic Merit Scholarship',
    organization: 'FG Sir Syed Girls Secondary School',
    year: '2021',
    details: 'Conferred for academic distinction and school troop leadership during Matriculation.',
  },
];

export interface LanguageItem {
  id: string;
  name: string;
  nativeScript: string;
  level: string;
  scale: number;
  tagColor: string;
  irApplication: string;
  description: string;
  linkedSkills: string[];
}

export const LANGUAGES: LanguageItem[] = [
  {
    id: 'english',
    name: 'English',
    nativeScript: 'English',
    level: 'Full Professional / Fluent',
    scale: 5,
    tagColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300',
    irApplication: 'Multilateral Diplomacy & Global Policy',
    description:
      'Working language for UN Women CSW70 Youth Forum, WAGGGS UK global governance, and international policy brief drafting.',
    linkedSkills: ['Multilateral Diplomacy', 'Strategic Advocacy', 'Policy Brief Drafting', 'Public Speaking & Oratory'],
  },
  {
    id: 'urdu',
    name: 'Urdu',
    nativeScript: 'اردو',
    level: 'Native / Bilingual',
    scale: 5,
    tagColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300',
    irApplication: 'National Governance & Civic Advocacy',
    description:
      'Primary medium for nationwide PGGA programs, UNICEF health campaigns, public sector consultations, and civic stakeholder dialogues.',
    linkedSkills: ['Strategic Advocacy', 'Youth Leadership', 'Community Mobilization', 'Stakeholder Engagement'],
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    nativeScript: 'پنجابی',
    level: 'Professional Working',
    scale: 4,
    tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300',
    irApplication: 'Grassroots Community Mobilization',
    description:
      'Essential for regional community empowerment in Rawalpindi, farmer interactions during tree drives, and localized field action.',
    linkedSkills: ['Community Mobilization', 'Environmental Action', 'Grassroots Advocacy'],
  },
  {
    id: 'arabic',
    name: 'Arabic',
    nativeScript: 'العربية',
    level: 'Elementary / Diplomatic Script',
    scale: 2,
    tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300',
    irApplication: 'Regional Middle Eastern Studies',
    description:
      'Reading comprehension and diplomatic terminology for OIC geopolitical research and foundational Islamic international affairs.',
    linkedSkills: ['Foreign Policy Analysis', 'Qualitative Research'],
  },
];

export const matchSkillOrProficiency = (
  itemSkills: string[] | undefined,
  filter?: string | null
): boolean => {
  if (!filter) return true;
  if (!itemSkills || itemSkills.length === 0) return false;

  // Direct exact skill match
  if (itemSkills.includes(filter)) return true;

  // If filter is a language name (e.g. "English" or "Language: English")
  const cleanLang = filter.replace(/^language:\s*/i, '').trim().toLowerCase();
  const langMatch = LANGUAGES.find((l) => l.name.toLowerCase() === cleanLang);
  if (langMatch) {
    return itemSkills.some((s) => langMatch.linkedSkills.includes(s));
  }

  // If filter is a language proficiency level (e.g. "Full Professional / Fluent" or "Proficiency: Native / Bilingual")
  const cleanLevel = filter.replace(/^proficiency:\s*/i, '').trim().toLowerCase();
  const matchedLangs = LANGUAGES.filter((l) => l.level.toLowerCase() === cleanLevel);
  if (matchedLangs.length > 0) {
    const allLinkedSkills = matchedLangs.flatMap((l) => l.linkedSkills);
    return itemSkills.some((s) => allLinkedSkills.includes(s));
  }

  // If filter is a skill level (e.g. "Level: Advanced", "Advanced", "Specialized")
  const cleanSkillLevel = filter.replace(/^level:\s*/i, '').trim().toLowerCase();
  const matchingSkillsForLevel = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.filter((s) => s.level?.toLowerCase() === cleanSkillLevel).map((s) => s.name)
  );
  if (matchingSkillsForLevel.length > 0) {
    return itemSkills.some((s) => matchingSkillsForLevel.includes(s));
  }

  return false;
};

