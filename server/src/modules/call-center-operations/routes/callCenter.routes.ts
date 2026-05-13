import { Router } from 'express';
import { getIncidents, getDispatch, getTelemetry, getEscalations, getAnalytics } from '../controllers/callCenter.controller';

const router = Router();

router.get('/incidents', getIncidents);
router.get('/dispatch', getDispatch);
router.get('/telemetry', getTelemetry);
router.get('/escalations', getEscalations);
router.get('/analytics', getAnalytics);

export default router;
