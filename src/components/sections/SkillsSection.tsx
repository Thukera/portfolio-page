'use client';

import React from 'react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function SkillsSection() {
  const { t } = useLanguage();

  const titles = {
    en: 'Skills & Technologies',
    pt: 'Habilidades & Tecnologias',
  };

  return (
    <Section id="skills" className="bg-bg-secondary">
      <SectionTitle>{t(titles)}</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillGroup, index) => (
          <Card key={index} hover>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              {t(skillGroup.category)}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <li 
                  key={skillIndex}
                  className="flex items-center gap-2 text-text-primary"
                >
                  <span className="w-2 h-2 bg-accent-primary rounded-full flex-shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
