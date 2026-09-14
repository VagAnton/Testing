const baseConfig = require('./cypress.config');

module.exports = {
  ...baseConfig,

  e2e: {
    ...baseConfig.e2e,

    baseUrl: 'https://qauto2.forstudy.space/',

    env: {
      email: 'anton_test2@gmail.com',
      password: 'StrongP4ssword',
    },
  },
};