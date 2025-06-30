const request = require('supertest');
const app = require('../../src/app');

describe('Integration Tests', () => {
  describe('Calculator Workflow', () => {
    test('debe realizar múltiples operaciones en secuencia', async () => {
      // Test suma
      const addResponse = await request(app)
        .post('/api/calculator/add')
        .send({ a: 10, b: 5 });
      
      expect(addResponse.status).toBe(200);
      expect(addResponse.body.result).toBe(15);

      // Test resta
      const subtractResponse = await request(app)
        .post('/api/calculator/subtract')
        .send({ a: addResponse.body.result, b: 3 });
      
      expect(subtractResponse.status).toBe(200);
      expect(subtractResponse.body.result).toBe(12);

      // Test multiplicación
      const multiplyResponse = await request(app)
        .post('/api/calculator/multiply')
        .send({ a: subtractResponse.body.result, b: 2 });
      
      expect(multiplyResponse.status).toBe(200);
      expect(multiplyResponse.body.result).toBe(24);
    });
  });

  describe('Error Handling Integration', () => {
    test('debe manejar errores de manera consistente', async () => {
      const endpoints = ['/api/calculator/add', '/api/calculator/subtract', '/api/calculator/multiply'];
      
      for (const endpoint of endpoints) {
        const response = await request(app)
          .post(endpoint)
          .send({ a: 'invalid', b: 2 });
        
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
      }
    });
  });
});