import express from 'express';
import { getRecoveryStats, createIncident, getIncidents } from '../controllers/RecoveryController';

const router = express.Router();

router.get('/stats', getRecoveryStats);
router.get('/incidents', getIncidents);
router.post('/incidents', createIncident);

export default router;
