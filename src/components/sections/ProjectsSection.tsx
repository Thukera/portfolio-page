'use client';

import React, { useState } from 'react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function ProjectsSection() {
  const { t } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const titles = {
    en: 'Featured Projects',
    pt: 'Projetos em Destaque',
  };

  const viewProjectText = {
    en: 'View Project',
    pt: 'Ver Projeto',
  };

  const confidentialText = {
    en: 'Enterprise Project (Confidential)',
    pt: 'Projeto Empresarial (Confidencial)',
  };

  return (
    <Section id="projects">
      <SectionTitle>{t(titles)}</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <Card key={project.id} hover className="flex flex-col">
            {/* Project Media (Video or Image) */}
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-bg-secondary">
              {project.isConfidential && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 z-10">
                  <div className="text-center p-4 bg-bg-primary/80 backdrop-blur-sm rounded-lg">
                    <svg className="w-16 h-16 mx-auto mb-2 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-sm text-text-secondary font-medium">
                      {t(confidentialText)}
                    </span>
                  </div>
                </div>
              )}
              {/* Video or Image rendering */}
              {project.image && project.image.endsWith('.mp4') ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={project.image} type="video/mp4" />
                </video>
              ) : project.image ? (
                <img 
                  src={project.image} 
                  alt={t(project.title)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30"></div>
              )}
            </div>

            {/* Project Info */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {t(project.title)}
              </h3>
              <p className="text-text-secondary mb-4 flex-1">
                {t(project.description)}
              </p>

              {/* Tech Tags */}
              <div 
                className="relative flex flex-wrap gap-2 mb-4"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {(hoveredProject === project.id ? project.tags : project.tags.slice(0, 4)).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-accent-primary/10 text-accent-primary rounded text-xs font-medium transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && hoveredProject !== project.id && (
                  <span className="px-2 py-1 bg-bg-secondary text-text-secondary rounded text-xs font-medium cursor-pointer hover:bg-accent-primary/20 hover:text-accent-primary transition-all duration-200">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, index) => (
                    <li 
                      key={index}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-accent-primary mt-1.5">•</span>
                      <span>{t(highlight)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Action Button */}
              {project.url && !project.isConfidential && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.url, '_blank')}
                  className="w-full"
                >
                  {t(viewProjectText)} →
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
