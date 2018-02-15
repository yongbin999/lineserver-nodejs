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

  it('responds to /', function testHealth(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });

  it('404 everything else', function test404Path(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });

  it('get route /lines/1 - happy path', function testSuccessLine(done) {
  request(server)
    .get('/lines/1')
    .expect(200, done);
  });

  it('get route /lines/10001 - happy path splitfile', function testSuccessLine(done) {
  request(server)
    .get('/lines/10001')
    .expect(200, done);
  });

  it('get route /lines/999999 - line out of bound ', function testEOF(done) {
  request(server)
    //.set('Authorization', 'Token exampletoken')
    //.field('Content-Type', 'application/json')
    .get('/lines/999999')
    .expect(413, done);
  });

  it('get route /lines/abc - not a number input ', function testNAN(done) {
  request(server)
    //.set('Authorization', 'Token exampletoken')
    //.field('Content-Type', 'application/json')
    .get('/lines/abc')
    .expect(400, done);
  });
});