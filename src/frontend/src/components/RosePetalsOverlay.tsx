import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface Petal {
  x: number;
  y: number;
  rotation: number;
  speed: number;
  drift: number;
  size: number;
  opacity: number;
}

export function RosePetalsOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const imageRef = useRef<HTMLImageElement | undefined>(undefined);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Load petal image
    const img = new Image();
    img.src = '/assets/generated/rose-petal.dim_256x256.png';
    imageRef.current = img;

    // Initialize petals
    const petalCount = prefersReducedMotion ? 5 : 15;
    petalsRef.current = Array.from({ length: petalCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      rotation: Math.random() * 360,
      speed: prefersReducedMotion ? 0.3 : 0.5 + Math.random() * 1,
      drift: (Math.random() - 0.5) * 2,
      size: 20 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.4
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal) => {
        // Update position
        petal.y += petal.speed;
        petal.x += Math.sin(petal.y * 0.01) * petal.drift;
        petal.rotation += 0.5;

        // Reset if off screen
        if (petal.y > canvas.height + 50) {
          petal.y = -50;
          petal.x = Math.random() * canvas.width;
        }

        // Draw petal
        if (imageRef.current?.complete) {
          ctx.save();
          ctx.globalAlpha = petal.opacity;
          ctx.translate(petal.x, petal.y);
          ctx.rotate((petal.rotation * Math.PI) / 180);
          ctx.drawImage(
            imageRef.current,
            -petal.size / 2,
            -petal.size / 2,
            petal.size,
            petal.size
          );
          ctx.restore();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    img.onload = () => {
      animate();
    };

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
