/* @flow */

import _i18n from 'i18next';
import Expo from 'expo';


const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback =>
    Expo.DangerZone.Localization.getCurrentLocaleAsync().then((lng) => {
      callback(lng.replace('_', '-'));
    }),
  init: () => {},
  cacheUserLanguage: () => {},
};

export const i18n = _i18n
  .use(languageDetector)
  .use({})
  .init({
    fallbackLng: 'ru',
    resources: {
      ru: {
        translations: {
          main: {
            menuTitle: 'Меню',
          },
        },
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export {translate} from 'react-i18next';
