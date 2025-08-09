import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-black/40 border border-purple-500 rounded-2xl shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

