'use client';

import React from 'react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function EducationSection() {
  const { t } = useLanguage();

  const titles = {
    educationTitle: { en: 'Education & Certifications', pt: 'Educação & Certificações' },
    educationLabel: { en: 'Education', pt: 'Educação' },
    certificationsLabel: { en: 'Certifications', pt: 'Certificações' },
  };

  return (
    <Section id="education" className="bg-bg-secondary">
      <SectionTitle>{t(titles.educationTitle)}</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-6 pb-3 border-b border-border">
            {t(titles.educationLabel)}
          </h3>
          <div className="space-y-6">
            {portfolioData.education.map((edu) => (
              <Card key={edu.id} hover>
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  {t(edu.degree)}
                </h4>
                <p className="text-accent-primary font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-text-secondary text-sm mb-3">
                  {edu.period.start} - {edu.period.end} • {edu.location}
                </p>
                {edu.description && (
                  <p className="text-text-secondary text-sm">
                    {t(edu.description)}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-6 pb-3 border-b border-border">
            {t(titles.certificationsLabel)}
          </h3>
          <div className="space-y-3">
            {portfolioData.certifications.map((cert) => (
              <Card key={cert.id} hover className="py-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
