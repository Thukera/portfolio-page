'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function HeroSection() {
  const { language, t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadCV = () => {
    const cvPath = `/cv/Arthur_Hardman_Borges_CV_${language.toUpperCase()}.pdf`;
    window.open(cvPath, '_blank');
  };

  const texts = {
    viewProjects: { en: 'View Projects', pt: 'Ver Projetos' },
    downloadCV: { en: 'Download CV', pt: 'Baixar CV' },
    contactMe: { en: 'Contact Me', pt: 'Entre em Contato' },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-accent-primary overflow-hidden bg-bg-card">
                <img 
                  src="/photo/profile.jpeg" 
                  alt={portfolioData.contact.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-avatar')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-avatar w-full h-full flex items-center justify-center text-6xl font-bold text-accent-primary bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20';
                      fallback.textContent = 'AH';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary animate-fade-in">
            {portfolioData.contact.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent-primary font-medium animate-fade-in-delayed">
            {t(portfolioData.tagline)}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-text-secondary animate-fade-in-delayed-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{portfolioData.contact.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 animate-fade-in-delayed-3">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => scrollToSection('#projects')}
            >
              {t(texts.viewProjects)}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={downloadCV}
            >
              {t(texts.downloadCV)}
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              {t(texts.contactMe)}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-delayed-4">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="Scroll to about section"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
