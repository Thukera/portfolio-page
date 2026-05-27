'use client';

import React from 'react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function ExperienceSection() {
  const { t } = useLanguage();

  const titles = {
    en: 'Work Experience',
    pt: 'Experiência Profissional',
  };

  const currentLabel = {
    en: 'Current',
    pt: 'Atual',
  };

  return (
    <Section id="experience">
      <SectionTitle>{t(titles)}</SectionTitle>
      
      <div className="space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <Card key={exp.id} hover className="relative">
            {/* Timeline Connector */}
            {index < portfolioData.experience.length - 1 && (
              <div className="absolute left-6 top-full h-8 w-0.5 bg-border"></div>
            )}
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Timeline Dot */}
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full border-4 ${
                  exp.current ? 'bg-accent-primary border-accent-primary' : 'bg-bg-secondary border-border'
                } flex items-center justify-center`}>
                  <div className={`w-3 h-3 rounded-full ${
                    exp.current ? 'bg-white' : 'bg-accent-primary'
                  }`}></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-1">
                      {t(exp.role)}
                    </h3>
                    <p className="text-lg text-accent-primary font-medium">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-secondary font-medium">
                      {exp.period.start} - {exp.current ? t(currentLabel) : exp.period.end}
                    </p>
                  </div>
                </div>

                <p className="text-text-primary leading-relaxed mb-4">
                  {t(exp.description)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
