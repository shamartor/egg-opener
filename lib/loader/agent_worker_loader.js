'use strict';
const path = require('path');
const OpenLoader = require('./open_loader.js');

class OpenAgentWorkerLoader extends OpenLoader {

  loadConfig() {
    this.loadPlugin();
    super.loadConfig();
  }

  load() {
    this.loadAgentExtend();
    this.loadContextExtend();

    this.loadCustomAgent();
  }

}

module.exports = OpenAgentWorkerLoader;
