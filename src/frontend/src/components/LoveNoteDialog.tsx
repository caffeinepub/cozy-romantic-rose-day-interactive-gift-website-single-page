import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Heart } from 'lucide-react';

interface LoveNoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  note: string;
  roseNumber: number;
}

export function LoveNoteDialog({ isOpen, onClose, note, roseNumber }: LoveNoteDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-rose-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            Rose #{roseNumber}
          </DialogTitle>
          <DialogDescription className="text-base text-rose-800 font-medium leading-relaxed pt-4">
            {note}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <div className="text-4xl animate-pulse">🌹</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
