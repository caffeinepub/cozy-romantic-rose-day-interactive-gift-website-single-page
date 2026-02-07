import { Heart } from 'lucide-react';

interface BouquetRosesProps {
  onRoseClick: (index: number) => void;
}

export function BouquetRoses({ onRoseClick }: BouquetRosesProps) {
  const roses = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {roses.map((index) => (
          <button
            key={index}
            onClick={() => onRoseClick(index)}
            className="group relative aspect-square flex items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 hover:from-rose-500 hover:to-rose-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-rose-300 animate-heartbeat"
            aria-label={`Rose ${index + 1}`}
          >
            <Heart className="w-8 h-8 md:w-12 md:h-12 text-white fill-white group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center text-xs font-bold text-rose-800">
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
