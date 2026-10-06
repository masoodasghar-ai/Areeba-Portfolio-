import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import {
  Award,
  Briefcase,
  Check,
  Download,
  GraduationCap,
  Home,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
  Sparkles,
  User,
} from 'lucide-react';
import {
  IMAGES,
  PROFILE_INFO,
} from '../data/portfolioData';

interface ResumeDocumentSectionProps {
  isDarkMode: boolean;
  onOpenModal: () => void;
}

export const ResumeDocumentSection: React.FC<ResumeDocumentSectionProps> = ({
  isDarkMode,
  onOpenModal,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<'uniform' | 'formal'>('uniform');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!documentRef.current || isGeneratingPDF) return;

    try {
      setIsGeneratingPDF(true);
      const element = documentRef.current;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();

      if (pdfHeight <= pageHeight) {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      } else {
        let heightLeft = pdfHeight;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
          heightLeft -= pageHeight;
        }
      }

      pdf.save('Areeba_Sajjid_Academic_CV.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <section id="resume" className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 no-print">
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
              Curriculum Vitae
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Official Academic Curriculum Vitae
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Authentic academic curriculum vitae format modeled directly from Areeba Sajjid's official
              recruitment dossier.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
            {/* Direct High-Resolution PDF Download Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-xs cursor-pointer ${
                downloadSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold'
              } disabled:opacity-70 disabled:cursor-wait`}
              title="Download High-Resolution PDF Document directly"
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download High-Res PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-xs'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Dialog</span>
            </button>
            <button
              onClick={onOpenModal}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-xs'
              }`}
            >
              <span>Full Screen View</span>
            </button>
          </div>
        </div>

        {/* Embedded Interactive Resume Card (Matching Word Document Reference) */}
        <div
          ref={documentRef}
          className={`printable-academic-cv rounded-2xl border shadow-xl overflow-hidden transition-all max-w-5xl mx-auto bg-white ${
            isDarkMode ? 'border-slate-700' : 'border-slate-300'
          }`}
        >
          {/* TOP HEADER SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-300">
            {/* Top Left: Circular headshot container */}
            <div className="md:col-span-4 bg-[#F2F5F8] p-5 flex flex-col items-center justify-center border-r border-slate-300">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-3 border-white shadow-md bg-slate-800">
                <img
                  src={selectedPhoto === 'uniform' ? IMAGES.portrait : IMAGES.formalPortrait}
                  alt="Areeba Sajjid"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Photo switch toggle (No print) */}
              <div className="flex items-center gap-1.5 mt-2 no-print">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('uniform')}
                  className={`px-2 py-0.5 text-[10px] rounded font-semibold transition-colors cursor-pointer ${
                    selectedPhoto === 'uniform'
                      ? 'bg-[#1B365D] text-white shadow-xs'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title="Scout Delegation Uniform (as in Word CV)"
                >
                  Guide Uniform
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('formal')}
                  className={`px-2 py-0.5 text-[10px] rounded font-semibold transition-colors cursor-pointer ${
                    selectedPhoto === 'formal'
                      ? 'bg-[#1B365D] text-white shadow-xs'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title="Formal Portrait"
                >
                  Formal
                </button>
              </div>
            </div>

            {/* Top Right: Slate Blue Banner */}
            <div className="md:col-span-8 bg-[#BACBDC] p-6 sm:p-8 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest text-[#132A4A] uppercase font-sans">
                AREEBA SAJJID
              </h1>
              <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-[#1C3E68] uppercase mt-1">
                BS STUDENT FOR INTERNATIONAL RELATIONS FINAL YEAR
              </h2>
            </div>
          </div>

          {/* MAIN TWO-COLUMN BODY */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[960px]">
            {/* ========================================================
                LEFT COLUMN: #F2F5F8 (Contact, Education, Social Skills, Achievements)
               ======================================================== */}
            <div className="md:col-span-4 bg-[#F2F5F8] p-5 sm:p-6 border-r border-slate-300 space-y-6">
              {/* CONTACT SECTION */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#1B365D] border-b border-slate-300 pb-1">
                  CONTACT
                </h3>
                <div className="space-y-2.5 text-[11px] text-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1B365D] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-mono font-medium">+92-340-5659811</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1B365D] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-2.5 h-2.5" />
                    </div>
                    <a
                      href="mailto:areebasajid378@gmail.com"
                      className="break-all font-medium text-sky-800 hover:underline"
                    >
                      areebasajid378@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1B365D] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-medium">WhatsApp: 0340-5659811</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1B365D] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Home className="w-2.5 h-2.5" />
                    </div>
                    <span className="leading-snug">
                      H. No 651-A, Dhok Ratta, Rawalpindi, Pakistan
                    </span>
                  </div>
                </div>
              </div>

              {/* EDUCATION SUMMARY */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#1B365D] border-b border-slate-300 pb-1">
                  EDUCATION
                </h3>
                <div className="space-y-3 text-[11px] text-slate-800 leading-snug">
                  <div>
                    <h4 className="font-bold uppercase text-slate-900">
                      FG SIR SYED GIRLS SECONDARY SCHOOL, RAWALPINDI
                    </h4>
                    <p className="text-slate-600 uppercase text-[10px] mt-0.5">
                      MATRICULATION, HUMANITIES
                    </p>
                    <p className="font-mono text-slate-500 text-[10px]">2019 – 2021</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      FG College for Women’s Rawalpindi,{' '}
                      <span className="font-normal text-slate-700">HSSC</span>
                    </h4>
                    <p className="text-slate-600 text-[10px] mt-0.5">Certificate (2021).</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Fatima Jinnah Women University, Rawalpindi
                    </h4>
                    <p className="text-slate-600 text-[10px] mt-0.5">
                      BS U/E International Relations,
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL SKILLS */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#1B365D] border-b border-slate-300 pb-1">
                  SOCIAL SKILLS
                </h3>
                <ul className="space-y-2 text-[11px] text-slate-800 leading-relaxed list-disc list-outside pl-4">
                  <li>
                    Young Leader (Volunteer) PGGA (Pakistan Girls Guides Association)
                  </li>
                  <li>
                    Global Advocacy campaigns 2026.{' '}
                    <strong className="font-bold text-slate-900">GLOBAL ADVOCATE</strong>{' '}
                    WAGGGS Word Association of Girl Guides & Girls Scouts
                  </li>
                  <li>
                    Microsoft Office
                  </li>
                  <li>
                    Ai Skills Gemini & ChatGPT
                  </li>
                </ul>
              </div>

              {/* ACHIEVEMENTS AWARDS */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#1B365D] border-b border-slate-300 pb-1">
                  ACHIEVEMENTS AWARDS
                </h3>
                <ul className="space-y-2.5 text-[11px] text-slate-800 leading-relaxed list-disc list-outside pl-4">
                  <li>
                    <strong className="font-bold text-slate-900">Honors:</strong> Recipient of the Punjab
                    Educational Endowment Fund (PEEF) Scholarship.
                  </li>
                  <li>
                    <strong className="font-bold text-slate-900">Intermediate/ (Humanities) Honors:</strong>{' '}
                    Recipient of the Excellence Award and accompanying merit cash prize.
                  </li>
                  <li>
                    Awarded Certificate of Appreciation and academic merit scholarship
                  </li>
                </ul>
              </div>
            </div>

            {/* ========================================================
                RIGHT MAIN COLUMN: Clean White
               ======================================================== */}
            <div className="md:col-span-8 bg-white p-6 sm:p-8 space-y-6">
              {/* Professional Summary */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#1B365D] uppercase tracking-wide underline decoration-[#1B365D]/60 underline-offset-4">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-[12px] leading-relaxed text-slate-700 text-justify">
                  Final-year International Relations student with a proven track record in international politics,
                  foreign policy analysis, and climate governance. Experienced in representing youth voices at
                  premier global platforms, including UN Women forums. Possesses advanced skills in policy
                  research, strategic communication, and community mobilization. Seeking an internship opportunity
                  to leverage academic insights and contribute to impactful policy research initiatives.
                </p>
              </div>

              {/* Professional Experience */}
              <div className="space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-[#1B365D] uppercase tracking-wide underline decoration-[#1B365D]/60 underline-offset-4">
                  Professional Experience
                </h3>

                {/* Role 1: Global Advocate */}
                <div className="space-y-1.5">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Global Advocate
                    </h4>
                    <p className="text-[11px] italic text-slate-600 font-medium">
                      WAGGGS UK (World Association of Girl Guides and Girl Scouts) | December 2025 – Present
                    </p>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[11.5px] leading-relaxed">
                    <li>
                      <strong className="font-semibold text-slate-900">Global Policy Representation:</strong>{' '}
                      Represent youth perspectives in high-level international policy dialogues, including the UN
                      Women CSW70 Virtual Youth Forum.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-900">Public Speaking & Panelist Roles:</strong>{' '}
                      Serve as a featured panelist and speaker for virtual side events addressing the intersections
                      of climate justice, gender equality, and digital technology.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-900">Environmental Leadership:</strong>{' '}
                      Championed and executed the "Greening the Future" initiative, a community-based tree plantation
                      drive in Rawalpindi focused on native biodiversity and women’s environmental leadership.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-900">Policy Reporting:</strong> Draft
                      comprehensive policy briefs and advocacy communications for senior stakeholders, highlighting
                      implementation gaps between national legislation and grassroots realities for women.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-900">Campaign Coordination:</strong> Coordinated
                      international advocacy campaigns smoothly alongside global trainers and cross-functional
                      communications teams.
                    </li>
                  </ul>
                </div>

                {/* Role 2: Young Leader (Volunteer) */}
                <div className="space-y-1.5 pt-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Young Leader (Volunteer)
                    </h4>
                    <p className="text-[11px] italic text-slate-600 font-medium">
                      Pakistan Girl Guides Association (PGGA) | 2022 – Present
                    </p>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[11.5px] leading-relaxed">
                    <li>
                      <strong className="font-semibold text-slate-900">UN Diplomatic Simulation:</strong>{' '}
                      Selected to step into the role of a UN Women Country Representative during the UN Girls
                      Takeover 2025 framework.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-900">Public Health Advocacy:</strong>{' '}
                      Collaborated closely with UNICEF to design and implement policy-making and advocacy strategies
                      for cervical cancer awareness and prevention.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-900">Climate & Sustainability Action:</strong>{' '}
                      Managed the "Plastic Tide Turner Project," orchestrating grassroots awareness campaigns to
                      mitigate plastic pollution.
                    </li>
                    <li>
                      <strong className="font-semibold text-slate-900">Community Mobilization:</strong> Contributed
                      actively to the Global Youth Mobilization project, designing localized interventions to empower
                      youth and resolve critical community issues.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3 pt-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#1B365D] uppercase tracking-wide underline decoration-[#1B365D]/60 underline-offset-4">
                  Education
                </h3>

                <div className="space-y-3 text-xs sm:text-[11.5px]">
                  {/* Bachelors */}
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">
                      Bachelors of International Relations
                    </h4>
                    <p className="text-[11px] italic text-slate-600 font-medium">
                      Fatima Jinnah Women University, Rawalpindi | 2023 – Present
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700">
                      <li>
                        <strong className="font-semibold text-slate-900">Status:</strong> Final Year
                        Undergraduate student.
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Academic Standing:</strong> CGPA: 3.43 /
                        4.00
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Honors:</strong> Recipient of the Punjab
                        Educational Endowment Fund (PEEF) Scholarship.
                      </li>
                    </ul>
                  </div>

                  {/* Intermediate */}
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">
                      Intermediate (Humanities)
                    </h4>
                    <p className="text-[11px] italic text-slate-600 font-medium">
                      FG Women Degree College, Rawalpindi | 2021 – 2023
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700">
                      <li>
                        <strong className="font-semibold text-slate-900">Academic Standing:</strong> Grade A+
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Honors:</strong> Recipient of the
                        Excellence Award and accompanying merit cash prize.
                      </li>
                    </ul>
                  </div>

                  {/* Matriculation */}
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">
                      Matriculation (Humanities)
                    </h4>
                    <p className="text-[11px] italic text-slate-600 font-medium">
                      FG Sir Syed Girls Secondary School, Rawalpindi | 2019 – 2021
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700">
                      <li>
                        <strong className="font-semibold text-slate-900">Academic Standing:</strong> Grade A+
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Honors:</strong> Awarded Certificate of
                        Appreciation and academic merit scholarship.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
