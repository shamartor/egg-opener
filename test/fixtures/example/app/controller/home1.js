'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async whoIAm() {
    this.ctx.body = 'application';
  }
}

module.exports = HomeController;
