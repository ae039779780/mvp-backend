import { Router } from 'express';

const router = Router();

// API status
router.get('/', (req, res) => {
  res.json({
    message: 'MVP API is running',
    version: '0.1.0',
    endpoints: [
      'GET /api - API status',
      'GET /health - Health check'
    ],
    timestamp: new Date().toISOString(),
  });
});

// Users route placeholder
router.get('/users', (req, res) => {
  res.json({
    message: 'Users endpoint - ready for implementation',
    users: [],
  });
});

// Auth route placeholder
router.post('/auth/login', (req, res) => {
  res.json({
    message: 'Auth login endpoint - ready for implementation',
  });
});

export { router as apiRoutes };