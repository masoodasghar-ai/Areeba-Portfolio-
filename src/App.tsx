/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyMetrics } from './components/KeyMetrics';
import { MilestoneTimeline } from './components/MilestoneTimeline';
import { Experience } from './components/Experience';
import { Initiatives } from './components/Initiatives';
import { Competencies } from './components/Competencies';
import { Education } from './components/Education';
import { ResumeDocumentSection } from './components/ResumeDocumentSection';
import { SkillsGrid } from './components/SkillsGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FloatingNav } from './components/FloatingNav';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('areeba_portfolio_theme');
      return saved === 'dark';
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('areeba_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('areeba_portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/70 text-slate-900'
      }`}
    >
      {/* 3-Zone Top Bar */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* Split-Screen Hero with Editorial Portrait */}
        <Hero
          isDarkMode={isDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 4-Card Executive Key Achievements Row (Inspired by Resume Template) */}
        <KeyMetrics isDarkMode={isDarkMode} />

        {/* Visual Milestone Timeline with Recharts (Chronological Career Trajectory) */}
        <MilestoneTimeline isDarkMode={isDarkMode} />

        {/* Professional Experience (WAGGGS UK Global Advocate & PGGA Young Leader) */}
        <Experience
          isDarkMode={isDarkMode}
          selectedSkill={selectedSkill}
          onClearSkill={() => setSelectedSkill(null)}
          onSelectSkill={(skill) => setSelectedSkill(skill || null)}
        />

        {/* Flagship Initiatives & Policy Case Studies (Bento Grid + Modal Dossier) */}
        <Initiatives
          isDarkMode={isDarkMode}
          selectedSkill={selectedSkill}
          onClearSkill={() => setSelectedSkill(null)}
          onSelectSkill={(skill) => setSelectedSkill(skill || null)}
        />

        {/* Core Policy Competencies */}
        <Competencies isDarkMode={isDarkMode} />

        {/* Education & Academic Distinction (FJWU, Scholarships & Honors) */}
        <Education isDarkMode={isDarkMode} />

        {/* Official Executive Resume Document Section (Matching Pinterest CV Model) */}
        <ResumeDocumentSection
          isDarkMode={isDarkMode}
          onOpenModal={() => setIsResumeOpen(true)}
        />

        {/* Skills & Analytical Toolset (IR, Public Speaking, MS Office, ChatGPT) */}
        <SkillsGrid
          isDarkMode={isDarkMode}
          selectedSkill={selectedSkill}
          onSelectSkill={(skill) => setSelectedSkill(skill)}
        />

        {/* Working Internship & Policy Inquiry Section */}
        <ContactSection isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Side Navigation Bar & Back to Top Action */}
      <FloatingNav isDarkMode={isDarkMode} />

      {/* Full Executive Printable Resume Modal (Matching reference image structure) */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
