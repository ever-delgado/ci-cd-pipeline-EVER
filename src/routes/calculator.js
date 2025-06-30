const express = require('express');
const Calculator = require('../utils/calculator');

const router = express.Router();

/**
 * Middleware genérico para manejar operaciones de la calculadora.
 * @param {Function} operationFunction - La función de la clase Calculator a ejecutar.
 * @param {string} operationName - El nombre de la operación.
 */
const handleOperation = (operationFunction, operationName) => (req, res) => {
  try {
    const { a, b } = req.body;

    if (a === undefined || b === undefined) {
      return res.status(400).json({ error: 'Se requieren los parámetros "a" y "b".' });
    }

    const result = operationFunction(Number(a), Number(b));

    res.json({
      operation: operationName,
      a: Number(a),
      b: Number(b),
      result,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Asignar el manejador a cada ruta
router.post('/add', handleOperation(Calculator.add, 'add'));
router.post('/subtract', handleOperation(Calculator.subtract, 'subtract'));
router.post('/multiply', handleOperation(Calculator.multiply, 'multiply'));
router.post('/divide', handleOperation(Calculator.divide, 'divide'));
router.post('/power', handleOperation(Calculator.power, 'power'));

module.exports = router;