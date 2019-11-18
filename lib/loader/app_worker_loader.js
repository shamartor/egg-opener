'use strict';
const path = require('path');
const egg = require('egg');

class OpenAppWorkerLoader extends egg.AppWorkerLoader {

  /**
   * @override
   * Load all directories in convention
   */
  load() {
    // super.load();
    // app > plugin > core
    this.loadApplicationExtend();
    this.loadRequestExtend();
    this.loadResponseExtend();
    this.loadContextExtend();
    this.loadHelperExtend();

    // app > plugin
    this.loadCustomApp();
    // app > plugin
    this.loadService();
    // app > plugin > core
    this.loadMiddleware();
    // app
    // this.loadController();
    this.loadControllers();
    // app
    // this.loadRouter(); // Dependent on controllers
    this.loadRouters();
  }

  loadRouters() {
    const routerPaths = this.getRouterPaths().reverse();
    routerPaths.map(routerPath => {
      this.loadFile(routerPath);
    });
  }

  loadControllers() {
    const controllerPaths = this.getControllerPaths();
    this.loadController({ directory: controllerPaths });
  }

  getLoadUnitsWithoutPlugins() {
    return this.getLoadUnits()
      .filter(unit => unit.type !== 'plugin');
  }

  getRouterPaths() {
    return this.getLoadUnitsWithoutPlugins()
      .map(unit => path.join(unit.path, 'app/router'));
  }

  getControllerPaths() {
    return this.getLoadUnitsWithoutPlugins()
      .map(unit => path.join(unit.path, 'app/controller'));
  }
}

module.exports = OpenAppWorkerLoader;
