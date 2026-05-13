import express from 'express';
import { getRepairStats, createIncident, getIncidents } from '../controllers/RepairController';

const router = express.Router();

router.get('/stats', getRepairStats);
router.get('/incidents', getIncidents);
router.post('/incidents', createIncident);

export default router;
