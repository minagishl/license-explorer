export type Language = 'en' | 'ja';

export interface License {
  name: string;
  description: {
    en: string;
    ja: string;
  };
  permissions: {
    en: string[];
    ja: string[];
  };
  conditions: {
    en: string[];
    ja: string[];
  };
  limitations: {
    en: string[];
    ja: string[];
  };
}
