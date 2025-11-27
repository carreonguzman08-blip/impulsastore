// Optimized Meta Pixel loader for better performance

interface IdleCallbackOptions {
  timeout: number;
}

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
    requestIdleCallback?: (callback: () => void, options?: IdleCallbackOptions) => number;
  }
}

let isPixelLoaded = false;

export const loadMetaPixelOptimized = () => {
  if (isPixelLoaded || window.fbq) return;
  
  const loadPixel = () => {
    // Setup fbq function
    window.fbq = function() {
      if (window.fbq.callMethod) {
        window.fbq.callMethod.apply(window.fbq, arguments);
      } else {
        window.fbq.queue = window.fbq.queue || [];
        window.fbq.queue.push(arguments);
      }
    };
    
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];
    
    // Load script with performance optimizations
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    
    script.onload = () => {
      window.fbq('init', '1044819644529894');
      window.fbq('track', 'PageView');
      isPixelLoaded = true;
      console.log('Meta Pixel loaded optimized - ID: 1044819644529894');
    };
    
    script.onerror = () => {
      console.warn('Meta Pixel failed to load');
    };
    
    document.head.appendChild(script);
  };

  // Use requestIdleCallback for better performance
  if (window.requestIdleCallback) {
    window.requestIdleCallback(loadPixel, { timeout: 3000 });
  } else {
    // Fallback to setTimeout with longer delay
    setTimeout(loadPixel, 2000);
  }
};