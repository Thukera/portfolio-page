'use client';

import React from 'react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function ImpactSection() {
  const { t } = useLanguage();

  const titles = {
    en: 'Impact & Case Studies',
    pt: 'Impacto & Casos de Sucesso',
  };

  const industryLabel = {
    en: 'Industry',
    pt: 'Indústria',
  };

  const resultLabel = {
    en: 'Result',
    pt: 'Resultado',
  };

  return (
    <Section id="impact">
      <SectionTitle>{t(titles)}</SectionTitle>
      
      <div className="space-y-6">
        {portfolioData.caseStudies.map((caseStudy) => (
          <Card key={caseStudy.id} hover>
            <div className="space-y-4">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  🏆 {t(caseStudy.title)}
                </h3>
                <p className="text-accent-primary font-medium">
                  {t(industryLabel)}: {t(caseStudy.industry)}
                </p>
              </div>

              {/* Description */}
              <p className="text-text-primary leading-relaxed">
                {t(caseStudy.description)}
              </p>

              {/* Result */}
              <div className="bg-accent-primary/5 border-l-4 border-accent-primary pl-4 py-3">
                <p className="text-sm font-semibold text-accent-primary mb-1">
                  {t(resultLabel)}:
                </p>
                <p className="text-text-primary leading-relaxed">
                  {t(caseStudy.result)}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-bg-secondary text-text-secondary rounded-md text-sm font-medium border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
