'use client';

import React, { useState, useEffect } from 'react';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { en: 'About', pt: 'Sobre', href: '#about' },
    { en: 'Experience', pt: 'Experiência', href: '#experience' },
    { en: 'Skills', pt: 'Habilidades', href: '#skills' },
    { en: 'Projects', pt: 'Projetos', href: '#projects' },
    { en: 'Education', pt: 'Educação', href: '#education' },
    { en: 'Contact', pt: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg-primary/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero');
          }}
          className="text-xl md:text-2xl font-bold text-text-primary hover:text-accent-primary transition-colors"
        >
          Arthur Hardman Borges
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-text-primary hover:text-accent-primary transition-colors text-sm font-medium"
            >
              {item[language]}
            </a>
          ))}
        </div>

        {/* Theme and Language Toggles */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-bg-secondary hover:bg-bg-card transition-colors border border-border"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-text-primary hover:text-accent-primary transition-colors py-2 text-base font-medium"
              >
                {item[language]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
