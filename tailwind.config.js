module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  target: 'relaxed',
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  important: false,
  separator: ':',
};
