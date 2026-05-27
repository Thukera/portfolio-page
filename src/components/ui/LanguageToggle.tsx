'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-secondary hover:bg-bg-card transition-colors duration-200 border border-border"
      aria-label="Toggle language"
    >
      <span className="text-sm font-medium text-text-primary">
        {language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
      </span>
    </button>
  );
}
