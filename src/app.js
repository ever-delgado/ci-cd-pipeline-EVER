const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config/config');

const calculatorRoutes = require('./routes/calculator');
const healthRoutes = require('./routes/health');

const app = express();

// Middlewares de seguridad
app.use(helmet());
app.use(cors());

// Logging
if (config.nodeEnv !== 'testing') {
  app.use(morgan('combined'));
}

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.get('/', (req, res) => {
  res.json({
    message: 'API Calculator CI/CD Pipeline',
    version: '1.0.0',
    environment: config.nodeEnv,
    endpoints: {
      health: '/health',
      calculator: '/api/calculator'
    }
  });
});

// Rutas de la aplicación
app.use('/health', healthRoutes);
app.use('/api/calculator', calculatorRoutes);

// Manejo de errores 404
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    path: req.originalUrl,
    method: req.method
  });
});

// Manejo global de errores
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: config.nodeEnv === 'development' ? error.message : 'Algo salió mal'
  });
});

module.exports = app;