import { Reveal } from '../Reveal';
import { HiddenMessage } from '../HiddenMessage';
import { roseDayCopy } from '../../content/roseDayCopy';
import { Heart } from 'lucide-react';

export function LandingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <Reveal>
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-heartbeat" />
              <div className="absolute inset-0 animate-ping opacity-20">
                <Heart className="w-24 h-24 text-rose-400 fill-rose-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-6 leading-tight">
            {roseDayCopy.landing.title}
          </h1>

          <p className="text-xl md:text-2xl text-rose-700 mb-8 leading-relaxed">
            {roseDayCopy.landing.subtitle}
          </p>

          <div className="text-lg md:text-xl text-rose-600 space-y-4">
            <p>
              Every moment with you feels like{' '}
              <HiddenMessage
                hint="magic"
                message="✨ Pure, beautiful, endless magic ✨"
              />
            </p>
            <p className="text-base text-rose-500 italic">
              {roseDayCopy.landing.hint}
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <span className="text-6xl animate-bounce">🌹</span>
            <span className="text-6xl animate-bounce delay-100">🌹</span>
            <span className="text-6xl animate-bounce delay-200">🌹</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
