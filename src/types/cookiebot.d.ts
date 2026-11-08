export {};

declare global {
  interface Window {
    Cookiebot?: {
      renew: () => void;
      consent?: {
        necessary?: boolean;
        preferences?: boolean;
        statistics?: boolean;
        marketing?: boolean;
      };
    };

    dataLayer: unknown[];

    gtag: (...args: unknown[]) => void;
  }
}