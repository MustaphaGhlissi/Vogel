import I18n from 'react-native-i18n';
import en from './locale_en';
import fr from './locale_fr';

I18n.fallbacks = true;

I18n.translations = {
  en,
  fr
};

export default I18n;