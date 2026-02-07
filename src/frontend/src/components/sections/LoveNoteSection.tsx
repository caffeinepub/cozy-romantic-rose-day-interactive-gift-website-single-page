import { Reveal } from '../Reveal';
import { roseDayCopy } from '../../content/roseDayCopy';

export function LoveNoteSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent">
      <Reveal>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-8 text-center">
            {roseDayCopy.loveNote.title}
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200">
            <div className="prose prose-rose max-w-none">
              {roseDayCopy.loveNote.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-rose-800 leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl font-serif text-rose-900">
                {roseDayCopy.loveNote.signature}
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <span className="text-3xl">💕</span>
                <span className="text-3xl">🌹</span>
                <span className="text-3xl">💕</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
