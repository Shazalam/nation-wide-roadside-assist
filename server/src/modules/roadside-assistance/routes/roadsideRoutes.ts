import { Router } from 'express';
import { getAssistanceStats, getActiveIncidents, createIncident } from '../controllers/AssistanceController';
import { protect } from '../../../middleware/auth';

const router = Router();

router.get('/stats', getAssistanceStats);
router.get('/incidents/active', protect, getActiveIncidents);
router.post('/incidents', protect, createIncident);

export default router;
