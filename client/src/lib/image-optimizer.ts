// Optimized image utilities - removed unused preload function

const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').startsWith('data:image/webp');
};

// WebP detection for optimization
export const checkWebPSupport = () => {
  if (supportsWebP()) {
    console.log('WebP supported - optimizing images');
  }
};

// Lazy load images with intersection observer
export const lazyLoadImage = (img: HTMLImageElement) => {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImg = entry.target as HTMLImageElement;
        lazyImg.src = lazyImg.dataset.src!;
        lazyImg.classList.remove('blur-sm');
        imageObserver.unobserve(lazyImg);
      }
    });
  });

  imageObserver.observe(img);
};

// Optimize image loading for performance
export const optimizeImageForDevice = (imagePath: string, devicePixelRatio = 1) => {
  const baseUrl = imagePath.split('.')[0];
  const extension = imagePath.split('.').pop();
  
  // Use appropriate resolution based on device
  if (devicePixelRatio >= 2) {
    return `${baseUrl}@2x.${extension}`;
  }
  return imagePath;
};

// Generate responsive image srcset
export const generateSrcSet = (imagePath: string) => {
  const baseUrl = imagePath.split('.')[0];
  const extension = imagePath.split('.').pop();
  
  return [
    `${baseUrl}_small.${extension} 480w`,
    `${baseUrl}_medium.${extension} 768w`,
    `${baseUrl}_large.${extension} 1024w`,
    `${baseUrl}.${extension} 1920w`
  ].join(', ');
};