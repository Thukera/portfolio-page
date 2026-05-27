import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div 
      className={`
        bg-bg-card rounded-xl p-6 border border-border
        ${hover ? 'transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
