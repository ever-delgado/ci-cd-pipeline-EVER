const request = require('supertest');
const app = require('../../src/app');

describe('Routes Unit Tests', () => {
  describe('GET /', () => {
    test('debe retornar información de la API', async () => {
      const response = await request(app).get('/');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('endpoints');
    });
  });

  describe('GET /health', () => {
    test('debe retornar status OK', async () => {
      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('OK');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('POST /api/calculator/add', () => {
    test('debe sumar dos números correctamente', async () => {
      const response = await request(app)
        .post('/api/calculator/add')
        .send({ a: 2, b: 3 });
      
      expect(response.status).toBe(200);
      expect(response.body.result).toBe(5);
      expect(response.body.operation).toBe('add');
    });

    test('debe retornar error con parámetros faltantes', async () => {
      const response = await request(app)
        .post('/api/calculator/add')
        .send({ a: 2 });
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('404 handling', () => {
    test('debe retornar 404 para rutas no existentes', async () => {
      const response = await request(app).get('/ruta-inexistente');
      
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error');
    });
  });
});