const Calculator = require('../../src/utils/calculator');

describe('Calculator Unit Tests', () => {
  describe('add', () => {
    test('debe sumar dos números positivos correctamente', () => {
      expect(Calculator.add(2, 3)).toBe(5);
    });

    test('debe manejar números negativos', () => {
      expect(Calculator.add(-2, 3)).toBe(1);
      expect(Calculator.add(-2, -3)).toBe(-5);
    });

    test('debe manejar decimales', () => {
      expect(Calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('debe lanzar error con parámetros no numéricos', () => {
      expect(() => Calculator.add('a', 2)).toThrow('Los parámetros deben ser números');
      expect(() => Calculator.add(2, null)).toThrow('Los parámetros deben ser números');
    });
  });

  describe('subtract', () => {
    test('debe restar dos números correctamente', () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });

    test('debe manejar resultados negativos', () => {
      expect(Calculator.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('debe multiplicar dos números correctamente', () => {
      expect(Calculator.multiply(3, 4)).toBe(12);
    });

    test('debe manejar multiplicación por cero', () => {
      expect(Calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('debe dividir dos números correctamente', () => {
      expect(Calculator.divide(10, 2)).toBe(5);
    });

    test('debe lanzar error al dividir por cero', () => {
      expect(() => Calculator.divide(10, 0)).toThrow('No se puede dividir entre cero');
    });
  });

  describe('power', () => {
    test('debe calcular potencias correctamente', () => {
      expect(Calculator.power(2, 3)).toBe(8);
      expect(Calculator.power(5, 0)).toBe(1);
    });
  });
});