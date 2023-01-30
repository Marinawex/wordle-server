import request from 'supertest';
import app from '../app';

const MockWord = [
  { letter: 't', status: 'right' },
  { letter: 'e', status: 'right' },
  { letter: 's', status: 'right' },
  { letter: 't', status: 'right' },
];

describe('E2E - endpoints testing', () => {
  describe('GET / getWord', () => {
    it('should return 200 and HTML content type for GET request to /getWord', () => {
      return request(app).get('/getWord').expect(200).expect('content-type', 'text/html; charset=utf-8');
    });
  });

  describe('POST / checkWord', () => {
    it('should return 200 and JSON content type for POST request to /checkWord with correct mock data', () => {
      return request(app).post('/checkWord').expect('content-type', 'application/json; charset=utf-8').send(MockWord).expect(200);
    });
  });
});
