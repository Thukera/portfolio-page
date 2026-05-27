'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerText = {
    en: 'Built with Next.js & React',
    pt: 'Construído com Next.js & React',
  };

  return (
    <footer className="bg-bg-secondary border-t border-border py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Copyright and Tech Stack */}
        <div className="text-center space-y-2">
          <p className="text-text-secondary text-sm">
            © {currentYear} Arthur Hardman Borges. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs">
            {footerText[language]}
          </p>
        </div>
      </div>
    </footer>
  );
}
