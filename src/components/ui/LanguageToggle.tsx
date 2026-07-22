'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-bg-secondary hover:bg-bg-card transition-colors duration-200 border border-border"
      aria-label="Toggle language"
    >
      {/* English */}
      <span 
        className={`flex items-center gap-1 transition-all duration-200 ${
          language === 'en' 
            ? 'text-lg font-bold text-accent-primary' 
            : 'text-xs font-medium text-text-secondary opacity-60'
        }`}
      >
        🇺🇸 EN
      </span>
      
      {/* Separator */}
      <span className="text-text-secondary">|</span>
      
      {/* Portuguese */}
      <span 
        className={`flex items-center gap-1 transition-all duration-200 ${
          language === 'pt' 
            ? 'text-lg font-bold text-accent-primary' 
            : 'text-xs font-medium text-text-secondary opacity-60'
        }`}
      >
        🇧🇷 PT
      </span>
    </button>
  );
}
