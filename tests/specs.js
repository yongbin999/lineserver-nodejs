var request = require('supertest');
var assert = require('assert');



describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../app');
  });
  afterEach(function () {
    //server.close();
  });

  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });


  it('happypath - get route /lines/:line', function testSlash(done) {
  request(server)
    .get('/lines/1')
    .expect(200, done);
  });

});