import en from "../locales/en/common";
import es from "../locales/es/common";

type Lang = 'es' | 'en';

export const getTranslations = (lang: Lang) => {
  switch (lang) {
    case 'es':
      return es;
    case 'en':
      return en;
    default:
      return es; 
  }
};
