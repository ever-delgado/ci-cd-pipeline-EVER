class Calculator {
  static add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Los parámetros deben ser números');
    }
    return a + b;
  }

  static subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Los parámetros deben ser números');
    }
    return a - b;
  }

  static multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Los parámetros deben ser números');
    }
    return a * b;
  }

  static divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Los parámetros deben ser números');
    }
    if (b === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    return a / b;
  }

  static power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Los parámetros deben ser números');
    }
    return Math.pow(base, exponent);
  }
}

module.exports = Calculator;