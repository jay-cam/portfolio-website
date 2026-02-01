export {};

declare global {
  interface Window {
    _paq: any[];
    LogRocket?: {
      init: (appId: string) => void;
    };
  }
}
