import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { toast } from 'sonner';

export function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/audio/rose-day.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      toast.error('Unable to play audio. Please try again.', {
        duration: 3000,
      });
    }
  };

  return (
    <Button
      onClick={toggleAudio}
      variant="outline"
      size="icon"
      className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border-rose-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="h-4 w-4 text-rose-600" />
      ) : (
        <VolumeX className="h-4 w-4 text-rose-400" />
      )}
    </Button>
  );
}
