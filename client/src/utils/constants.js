import i18n from './localization';

export default {
  COLORS: {
    primary: '#44AD63',
    secondary: '#314637',
    tertiary: '#f34',
  },
  SORT_BY_RECIPE_VALUES: [
    {
      value: 'Price',
      label: i18n.t('price'),
    },
    {
      value: 'CO2',
      label: 'CO2',
    },
    {
      value: 'Name',
      label: i18n.t('name'),
    },
  ],
};
