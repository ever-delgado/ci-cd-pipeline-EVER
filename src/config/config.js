require('dotenv').config();

const config = {
  development: {
    port: process.env.PORT || 3000,
    nodeEnv: 'development'
  },
  testing: {
    port: 4000,
    nodeEnv: 'testing'
  },
  production: {
    port: process.env.PORT || 8080,
    nodeEnv: 'production'
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];