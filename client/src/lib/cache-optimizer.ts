// Cache optimization utilities for better performance

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully');
    } catch (error) {
      console.log('Service Worker registration failed:', error);
    }
  }
};

// Local storage cache with expiration
class CacheManager {
  private static instance: CacheManager;
  private cache = new Map<string, { data: any; expires: number }>();

  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  set(key: string, data: any, ttl: number = 300000): void { // 5 minutes default
    const expires = Date.now() + ttl;
    this.cache.set(key, { data, expires });
    
    // Store in localStorage for persistence
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify({ data, expires }));
    } catch (error) {
      console.warn('localStorage cache failed:', error);
    }
  }

  get(key: string): any | null {
    // Check memory cache first
    const memoryItem = this.cache.get(key);
    if (memoryItem && memoryItem.expires > Date.now()) {
      return memoryItem.data;
    }

    // Check localStorage cache
    try {
      const storageItem = localStorage.getItem(`cache_${key}`);
      if (storageItem) {
        const parsed = JSON.parse(storageItem);
        if (parsed.expires > Date.now()) {
          // Restore to memory cache
          this.cache.set(key, parsed);
          return parsed.data;
        }
        // Remove expired item
        localStorage.removeItem(`cache_${key}`);
      }
    } catch (error) {
      console.warn('localStorage cache read failed:', error);
    }

    return null;
  }

  clear(): void {
    this.cache.clear();
    // Clear localStorage cache
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('localStorage cache clear failed:', error);
    }
  }
}

export const cache = CacheManager.getInstance();

// Safe performance optimization - no CSS manipulation that could break rendering
export const optimizeCriticalPath = () => {
  if (typeof window === 'undefined') return;
  
  // Only safe optimizations that don't affect CSS rendering
  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  };

  // Run safe optimizations only
  if (document.readyState === 'complete') {
    optimizeImages();
  } else {
    window.addEventListener('load', optimizeImages);
  }
};