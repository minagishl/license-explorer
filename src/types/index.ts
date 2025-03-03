export type Language = 'en' | 'ja';

export interface LicenseAlias {
  name: string; // オリジナルのライセンス名
  aliases: string[]; // 略語や類似文字の配列
}

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
