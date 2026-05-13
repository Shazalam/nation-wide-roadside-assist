import { Router } from 'express';
import { getIncidents, getRecovery, getTelemetry, getSLA, getAnalytics } from '../controllers/escalation.controller';

const router = Router();

router.get('/incidents', getIncidents);
router.get('/recovery', getRecovery);
router.get('/telemetry', getTelemetry);
router.get('/sla', getSLA);
router.get('/analytics', getAnalytics);

export default router;
