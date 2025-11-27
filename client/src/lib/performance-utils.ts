// Performance utilities for optimizing page load and rendering

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Optimized for current architecture - removed unused image preloading

// Debounce function for scroll events
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  }) as T;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animation props based on user preferences
export const getAnimationProps = (defaultProps: any) => {
  if (prefersReducedMotion()) {
    return {
      ...defaultProps,
      transition: { duration: 0.01 },
      animate: { opacity: 1 },
      initial: { opacity: 0 }
    };
  }
  return defaultProps;
};

// Web Vitals optimization
export const optimizeWebVitals = () => {
  if (typeof window === 'undefined') return;
  
  // Enable font-display: swap for better loading
  if (document.fonts) {
    document.fonts.ready.then(() => {
      console.log('Fonts loaded');
    });
  }

  // Preload critical resources (optimized)
  const preloadLinks = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' }
  ];

  preloadLinks.forEach(({ href, as, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};