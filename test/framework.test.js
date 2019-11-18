'use strict';

const mock = require('egg-mock');

describe('test/framework.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'example',
      framework: true,
      // cache: false
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /_egg_routers', () => {
    return app.httpRequest()
      .get('/_egg_routers')
      .expect('framework')
      .expect(200);
  });

  // it('should GET /_egg_origin_controller', () => {
  //   return app.httpRequest()
  //     .get('/_egg_origin_controller')
  //     .expect('hello_origin_controller')
  //     .expect(200);
  // });
});

