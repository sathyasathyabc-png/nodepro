// server.test.js
const request = require('supertest');
const app = require('./server');

describe('GET /api/hello', () => {
  it('should return Hello, world! message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello, world!');
  });
});

describe('GET /api/test', () => {
  it('should return test app1 message', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('test app1');
  });
});
