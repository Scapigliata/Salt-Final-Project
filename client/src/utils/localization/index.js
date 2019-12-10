import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './english';
import sv from './swedish';

i18n.fallbacks = true;
i18n.translations = { en, sv };
i18n.locale = Localization.locale;

export default i18n;
