import { useEffect, useRef, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calcula se o elemento está visível na tela
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          // Calcula o offset baseado na posição do scroll
          const scrolled = window.scrollY;
          const elementScrolled = scrolled - (elementTop + window.scrollY - windowHeight);
          setOffset(elementScrolled * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};
