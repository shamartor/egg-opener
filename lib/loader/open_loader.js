'use strict';
const EggLoader = require('egg-core').EggLoader;

class OpenLoader extends EggLoader {

  getLoadUnitsWithoutPlugins() {
    return this.getLoadUnits()
      .filter(unit => unit.type !== 'plugin');
  }

}

module.exports = OpenLoader;