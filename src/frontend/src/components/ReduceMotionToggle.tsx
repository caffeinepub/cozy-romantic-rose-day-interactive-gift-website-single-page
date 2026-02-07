import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, SparklesIcon } from 'lucide-react';

export function ReduceMotionToggle() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleMotion = () => {
    setReducedMotion(!reducedMotion);
    document.documentElement.classList.toggle('reduce-motion');
  };

  return (
    <Button
      onClick={toggleMotion}
      variant="outline"
      size="icon"
      className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border-rose-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label={reducedMotion ? 'Enable animations' : 'Reduce animations'}
    >
      {reducedMotion ? (
        <SparklesIcon className="h-4 w-4 text-rose-400" />
      ) : (
        <Sparkles className="h-4 w-4 text-rose-600" />
      )}
    </Button>
  );
}
