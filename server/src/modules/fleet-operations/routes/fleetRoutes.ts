import { Router } from 'express';
import { getFleetStats, getActiveIncidents, createIncident } from '../controllers/fleetController';

const router = Router();

router.get('/stats', getFleetStats);
router.get('/incidents/active', getActiveIncidents);
router.post('/incidents', createIncident);

export default router;
