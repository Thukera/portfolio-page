'use client';

import React from 'react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function AboutSection() {
  const { t } = useLanguage();

  const titles = {
    en: 'About Me',
    pt: 'Sobre Mim',
  };

  return (
    <Section id="about" className="bg-bg-secondary">
      <SectionTitle>{t(titles)}</SectionTitle>
      
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-text-primary leading-relaxed whitespace-pre-line">
            {t(portfolioData.summary)}
          </p>
        </div>

        {/* Language Proficiency */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.languages.map((lang, index) => (
            <div 
              key={index}
              className="bg-bg-card rounded-lg p-6 border border-border"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {lang.language}
              </h3>
              <p className="text-accent-primary font-medium">
                {t(lang.proficiency)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
