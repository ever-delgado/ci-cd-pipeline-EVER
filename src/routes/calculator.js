const express = require('express');
const Calculator = require('../utils/calculator');
const router = express.Router();

// Endpoint para suma
router.post('/add', (req, res) => {
  try {
    const { a, b } = req.body;
    if (a === undefined || b === undefined) {
      return res.status(400).json({ 
        error: 'Se requieren los parámetros a y b' 
      });
    }
    
    const result = Calculator.add(Number(a), Number(b));
    res.json({ 
      operation: 'add',
      a: Number(a),
      b: Number(b),
      result 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para resta
router.post('/subtract', (req, res) => {
  try {
    const { a, b } = req.body;
    if (a === undefined || b === undefined) {
      return res.status(400).json({ 
        error: 'Se requieren los parámetros a y b' 
      });
    }
    
    const result = Calculator.subtract(Number(a), Number(b));
    res.json({ 
      operation: 'subtract',
      a: Number(a),
      b: Number(b),
      result 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para multiplicación
router.post('/multiply', (req, res) => {
  try {
    const { a, b } = req.body;
    if (a === undefined || b === undefined) {
      return res.status(400).json({ 
        error: 'Se requieren los parámetros a y b' 
      });
    }
    
    const result = Calculator.multiply(Number(a), Number(b));
    res.json({ 
      operation: 'multiply',
      a: Number(a),
      b: Number(b),
      result 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;