import { Reveal } from '../Reveal';
import { HiddenMessage } from '../HiddenMessage';
import { roseDayCopy } from '../../content/roseDayCopy';

export function WhyFavoriteSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent">
      <Reveal>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-12 text-center">
            {roseDayCopy.whyFavorite.title}
          </h2>

          <div className="space-y-8">
            {roseDayCopy.whyFavorite.reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{reason.emoji}</span>
                  <div>
                    <h3 className="text-xl font-serif text-rose-800 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-rose-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center pt-8">
              <p className="text-lg text-rose-600">
                You make every day feel like{' '}
                <HiddenMessage
                  hint="a dream"
                  message="💕 The most beautiful dream I never want to wake from 💕"
                />
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
