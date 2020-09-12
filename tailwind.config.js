module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  target: 'relaxed',
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        red: {
          100: '#FFF5F5',
          200: '#FED7D7',
          300: '#FEB2B2',
          400: '#FC8181',
          500: '#F56565',
          600: '#E53E3E',
          700: '#C53030',
          800: '#9B2C2C',
          900: '#E30813',
        },
      },
    },
  },

  important: false,
  separator: ':',
};
