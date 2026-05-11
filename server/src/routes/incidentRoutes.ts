import express from 'express';
import { 
  createIncident, 
  getIncidents, 
  updateIncidentStatus 
} from '../controllers/incidentController';
import { protect, authorize } from '../middleware/authMiddleware';

import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateMiddleware';

const router = express.Router();

router.route('/')
  .post(
    protect, 
    authorize('client', 'admin'),
    [
      body('serviceType').isIn(['tow', 'flat_tire', 'fuel_delivery', 'lockout', 'jump_start']),
      body('location.address').notEmpty(),
      body('location.coordinates.lat').isNumeric(),
      body('location.coordinates.lng').isNumeric(),
    ],
    validateRequest,
    createIncident
  )
  .get(protect, getIncidents);

router.route('/:id/status')
  .patch(protect, authorize('dispatcher', 'admin', 'vendor'), updateIncidentStatus);

export default router;
