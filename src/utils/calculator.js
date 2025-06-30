class Calculator {
  /**
   * Valida que los parámetros sean números finitos.
   * @param  {...any} params - Los parámetros a validar.
   * @private
   */
  static _validateNumbers(...params) {
    for (const param of params) {
      if (typeof param !== 'number' || !Number.isFinite(param)) {
        throw new Error('Los parámetros deben ser números válidos y finitos.');
      }
    }
  }

  static add(a, b) {
    Calculator._validateNumbers(a, b);
    return a + b;
  }

  static subtract(a, b) {
    Calculator._validateNumbers(a, b);
    return a - b;
  }

  static multiply(a, b) {
    Calculator._validateNumbers(a, b);
    return a * b;
  }

  static divide(a, b) {
    Calculator._validateNumbers(a, b);
    if (b === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    return a / b;
  }

  static power(base, exponent) {
    Calculator._validateNumbers(base, exponent);
    return Math.pow(base, exponent);
  }
}

module.exports = Calculator;