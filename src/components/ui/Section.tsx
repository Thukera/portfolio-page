import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {children}
      </div>
    </section>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
