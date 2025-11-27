interface TrafficSourceData {
  trafficSource: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export function detectTrafficSource(): TrafficSourceData {
  const url = new URL(window.location.href);
  const referrer = document.referrer;

  // Check UTM parameters first (most accurate)
  const utmSource = url.searchParams.get('utm_source');
  const utmMedium = url.searchParams.get('utm_medium');
  const utmCampaign = url.searchParams.get('utm_campaign');

  if (utmSource) {
    return {
      trafficSource: `UTM: ${utmSource}`,
      utmSource: utmSource,
      utmMedium: utmMedium || undefined,
      utmCampaign: utmCampaign || undefined,
    };
  }

  // Check Facebook parameters
  const fbclid = url.searchParams.get('fbclid');
  if (fbclid || referrer.includes('facebook.com') || referrer.includes('fb.com')) {
    return {
      trafficSource: 'Facebook',
      utmSource: 'facebook',
      utmMedium: fbclid ? 'cpc' : 'referral',
    };
  }

  // Check Instagram
  const igshid = url.searchParams.get('igshid');
  if (igshid || referrer.includes('instagram.com')) {
    return {
      trafficSource: 'Instagram',
      utmSource: 'instagram',
      utmMedium: 'referral',
    };
  }

  // Check TikTok
  if (referrer.includes('tiktok.com')) {
    return {
      trafficSource: 'TikTok',
      utmSource: 'tiktok',
      utmMedium: 'referral',
    };
  }

  // Check Google Ads
  const gclid = url.searchParams.get('gclid');
  if (gclid) {
    return {
      trafficSource: 'Google Ads',
      utmSource: 'google',
      utmMedium: 'cpc',
    };
  }

  // Check other Google services
  if (referrer.includes('google.com') || referrer.includes('google.')) {
    return {
      trafficSource: 'Google Search',
      utmSource: 'google',
      utmMedium: 'organic',
    };
  }

  // Check WhatsApp
  if (referrer.includes('whatsapp.com') || referrer.includes('wa.me')) {
    return {
      trafficSource: 'WhatsApp',
      utmSource: 'whatsapp',
      utmMedium: 'referral',
    };
  }

  // Check YouTube
  if (referrer.includes('youtube.com') || referrer.includes('youtu.be')) {
    return {
      trafficSource: 'YouTube',
      utmSource: 'youtube',
      utmMedium: 'referral',
    };
  }

  // Check Twitter/X
  if (referrer.includes('twitter.com') || referrer.includes('x.com') || referrer.includes('t.co')) {
    return {
      trafficSource: 'Twitter/X',
      utmSource: 'twitter',
      utmMedium: 'referral',
    };
  }

  // Check LinkedIn
  if (referrer.includes('linkedin.com') || referrer.includes('lnkd.in')) {
    return {
      trafficSource: 'LinkedIn',
      utmSource: 'linkedin',
      utmMedium: 'referral',
    };
  }

  // Check other social media
  const socialPlatforms = [
    { domain: 'snapchat.com', name: 'Snapchat' },
    { domain: 'pinterest.com', name: 'Pinterest' },
    { domain: 'reddit.com', name: 'Reddit' },
    { domain: 'telegram.org', name: 'Telegram' },
    { domain: 't.me', name: 'Telegram' },
  ];

  for (const platform of socialPlatforms) {
    if (referrer.includes(platform.domain)) {
      return {
        trafficSource: platform.name,
        utmSource: platform.name.toLowerCase(),
        utmMedium: 'referral',
      };
    }
  }

  // Check if it's a search engine
  const searchEngines = [
    'bing.com',
    'yahoo.com',
    'duckduckgo.com',
    'baidu.com',
    'yandex.com',
  ];

  for (const engine of searchEngines) {
    if (referrer.includes(engine)) {
      const engineName = engine.split('.')[0];
      return {
        trafficSource: `${engineName.charAt(0).toUpperCase() + engineName.slice(1)} Search`,
        utmSource: engineName,
        utmMedium: 'organic',
      };
    }
  }

  // Check if it's from another website
  if (referrer && referrer !== window.location.origin) {
    try {
      const referrerDomain = new URL(referrer).hostname;
      return {
        trafficSource: `Referral: ${referrerDomain}`,
        utmSource: 'referral',
        utmMedium: 'referral',
      };
    } catch (e) {
      // Invalid referrer URL
    }
  }

  // Direct traffic (no referrer or same domain)
  return {
    trafficSource: 'Direct',
    utmSource: 'direct',
    utmMedium: 'none',
  };
}