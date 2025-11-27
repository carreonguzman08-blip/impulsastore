import { useEffect } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { detectTrafficSource } from '@/lib/traffic-source-detector';

interface PageViewTrackerProps {
  page: string;
}

export default function PageViewTracker({ page }: PageViewTrackerProps) {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        const trafficSourceData = detectTrafficSource();
        
        await apiRequest('POST', '/api/page-view', { 
          page,
          ...trafficSourceData
        });
      } catch (error) {
        console.error('Failed to track page view:', error);
      }
    };

    // Track page view on component mount
    trackPageView();
  }, [page]);

  // This component doesn't render anything
  return null;
}