import { RosePetalsOverlay } from './components/RosePetalsOverlay';
import { AudioToggle } from './components/AudioToggle';
import { ReduceMotionToggle } from './components/ReduceMotionToggle';
import { LandingSection } from './components/sections/LandingSection';
import { WhyFavoriteSection } from './components/sections/WhyFavoriteSection';
import { VirtualRoseGiftSection } from './components/sections/VirtualRoseGiftSection';
import { LoveNoteSection } from './components/sections/LoveNoteSection';
import { EndingSection } from './components/sections/EndingSection';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="relative min-h-screen overflow-x-hidden">
        <RosePetalsOverlay />
        
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <AudioToggle />
          <ReduceMotionToggle />
        </div>

        <main className="relative z-10">
          <LandingSection />
          <WhyFavoriteSection />
          <VirtualRoseGiftSection />
          <LoveNoteSection />
          <EndingSection />
        </main>

        <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground/60">
          <p>© 2026. Built with ❤️ using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">caffeine.ai</a></p>
        </footer>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
