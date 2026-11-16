/// <reference types="astro/client" />

interface Window {
  __enableAnalytics?: () => void;
  __analyticsOn?: boolean;
  __cookieConsent?: 'granted' | 'denied' | null;
}
