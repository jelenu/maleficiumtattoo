export {};

declare global {
  interface Window {
    Cookiebot?: {
      renew: () => void;
      consent?: {
        statistics?: boolean;
      };
    };

    dataLayer: unknown[];

    gtag: (...args: unknown[]) => void;
  }
}