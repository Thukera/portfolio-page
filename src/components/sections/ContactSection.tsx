'use client';

import React from 'react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';

export function ContactSection() {
  const { t, language } = useLanguage();

  const titles = {
    en: 'Get In Touch',
    pt: 'Entre em Contato',
  };

  const subtitles = {
    en: 'Feel free to reach out for opportunities, collaborations, or just to say hi!',
    pt: 'Sinta-se à vontade para entrar em contato para oportunidades, colaborações ou apenas para dizer oi!',
  };

  const downloadCVText = {
    en: 'Download CV',
    pt: 'Baixar CV',
  };

  const copiedText = {
    en: 'Copied!',
    pt: 'Copiado!',
  };

  const emailText = {
    en: 'Email',
    pt: 'Email',
  };

  const [showEmailTooltip, setShowEmailTooltip] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCV = () => {
    const cvPath = `/cv/Arthur_Hardman_Borges_CV_${language.toUpperCase()}.pdf`;
    window.open(cvPath, '_blank');
  };

  return (
    <Section id="contact">
      <SectionTitle subtitle={t(subtitles)}>
        {t(titles)}
      </SectionTitle>
      
      <div className="max-w-4xl mx-auto">
        {/* Social Links and CV Download */}
        <div className="text-center space-y-8">
          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-bg-card border border-border rounded-full flex items-center justify-center hover:border-accent-primary hover:bg-accent-primary/10 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-bg-card border border-border rounded-full flex items-center justify-center hover:border-accent-primary hover:bg-accent-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email with Tooltip */}
            <div className="relative">
              <button
                onClick={() => setShowEmailTooltip(!showEmailTooltip)}
                className="w-12 h-12 bg-bg-card border border-border rounded-full flex items-center justify-center hover:border-accent-primary hover:bg-accent-primary/10 transition-all"
                aria-label={t(emailText)}
              >
                <svg className="w-6 h-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Email Tooltip */}
              {showEmailTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-50">
                  <div className="bg-bg-card border border-border rounded-lg shadow-xl p-4 min-w-[280px]">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-text-primary font-medium text-sm">{portfolioData.contact.email}</p>
                      <button
                        onClick={() => setShowEmailTooltip(false)}
                        className="text-text-secondary hover:text-text-primary transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(`mailto:${portfolioData.contact.email}`, '_blank')}
                        className="flex-1 px-3 py-2 bg-accent-primary hover:bg-accent-primary-hover text-white rounded-md text-sm font-medium transition-colors"
                      >
                        Send Email
                      </button>
                      <button
                        onClick={copyEmail}
                        className="px-3 py-2 bg-bg-secondary hover:bg-border text-text-primary rounded-md text-sm font-medium transition-colors"
                      >
                        {copied ? t(copiedText) : 'Copy'}
                      </button>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                    <div className="border-8 border-transparent border-t-border"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[15px]">
                      <div className="border-[7px] border-transparent border-t-bg-card"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CV Download Button */}
          <Button
            variant="outline"
            size="lg"
            onClick={downloadCV}
          >
            {t(downloadCVText)}
          </Button>
        </div>
      </div>
    </Section>
  );
}
