// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv-safe').config();

const express = require('express');
const bodyParser = require('body-parser');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use('/api', require('./routes'));
  }
}

module.exports = new AppController().express;
