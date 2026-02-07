import { useState } from 'react';

interface HiddenMessageProps {
  hint: string;
  message: string;
  className?: string;
}

export function HiddenMessage({ hint, message, className = '' }: HiddenMessageProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <button
      className={`relative inline-block cursor-pointer group ${className}`}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={() => setIsRevealed(!isRevealed)}
      onFocus={() => setIsRevealed(true)}
      onBlur={() => setIsRevealed(false)}
      aria-label={`Hidden message: ${hint}`}
    >
      <span className="relative inline-block border-b-2 border-dotted border-rose-300 text-rose-600 font-medium transition-all duration-300 group-hover:border-rose-500">
        {hint}
        <span className="absolute -top-1 -right-1 text-xs opacity-60">✨</span>
      </span>
      
      <span
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-4 py-2 bg-rose-50 text-rose-900 rounded-lg shadow-lg whitespace-nowrap text-sm font-serif transition-all duration-300 pointer-events-none ${
          isRevealed
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2'
        }`}
      >
        {message}
        <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-rose-50"></span>
      </span>
    </button>
  );
}
