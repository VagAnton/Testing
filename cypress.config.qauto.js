const baseConfig = require('./cypress.config');

module.exports = {
  ...baseConfig,

  e2e: {
    ...baseConfig.e2e,

    baseUrl: 'https://qauto.forstudy.space/',

    env: {
      email: 'anton_test@gmail.com',
      password: 'StrongP4ssword',
    },
  },
};