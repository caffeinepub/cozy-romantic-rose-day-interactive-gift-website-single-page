import { Reveal } from '../Reveal';
import { Heart } from 'lucide-react';

export function EndingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Heart className="w-32 h-32 text-rose-500 fill-rose-500 animate-heartbeat" />
              <div className="absolute inset-0 animate-ping opacity-20">
                <Heart className="w-32 h-32 text-rose-400 fill-rose-400" />
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-rose-900 mb-8 leading-tight">
            Happy Rose Day ❤️
          </h2>

          <p className="text-xl md:text-2xl text-rose-700 mb-12 leading-relaxed">
            Thank you for being the most wonderful person in my life. Here's to many more beautiful moments together.
          </p>

          <div className="flex justify-center gap-3">
            <span className="text-5xl animate-bounce">🌹</span>
            <span className="text-5xl animate-bounce delay-100">❤️</span>
            <span className="text-5xl animate-bounce delay-200">🌹</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
