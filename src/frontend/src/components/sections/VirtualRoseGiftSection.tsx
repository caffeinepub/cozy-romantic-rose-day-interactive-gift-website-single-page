import { useState } from 'react';
import { Reveal } from '../Reveal';
import { BouquetRoses } from '../BouquetRoses';
import { LoveNoteDialog } from '../LoveNoteDialog';
import { roseDayCopy } from '../../content/roseDayCopy';
import { getAssetUrl } from '../../lib/assetUrl';

export function VirtualRoseGiftSection() {
  const [selectedRose, setSelectedRose] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">
            {roseDayCopy.virtualGift.title}
          </h2>

          <p className="text-lg md:text-xl text-rose-700 mb-12 max-w-2xl mx-auto">
            {roseDayCopy.virtualGift.subtitle}
          </p>

          <div className="mb-12">
            {!imageError ? (
              <img
                src={getAssetUrl('assets/generated/bouquet.dim_1200x1200.png')}
                alt="Beautiful rose bouquet"
                className="w-64 h-64 mx-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-64 h-64 mx-auto flex items-center justify-center bg-rose-50 rounded-2xl border-2 border-rose-200">
                <div className="text-center px-4">
                  <span className="text-6xl mb-2 block">💐</span>
                  <p className="text-sm text-rose-600">A beautiful bouquet for you</p>
                </div>
              </div>
            )}
          </div>

          <BouquetRoses onRoseClick={setSelectedRose} />

          <p className="text-sm text-rose-500 mt-8 italic">
            {roseDayCopy.virtualGift.hint}
          </p>
        </div>
      </Reveal>

      <LoveNoteDialog
        isOpen={selectedRose !== null}
        onClose={() => setSelectedRose(null)}
        note={selectedRose !== null ? roseDayCopy.roseNotes[selectedRose] : ''}
        roseNumber={selectedRose !== null ? selectedRose + 1 : 0}
      />
    </section>
  );
}
