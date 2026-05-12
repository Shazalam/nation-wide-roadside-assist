import { Router } from 'express';
import { getRecoveryStats, getRecentIncidents } from '../controllers/RecoveryController';
import { protect } from '../../../middleware/auth';

const router = Router();

router.get('/stats', getRecoveryStats);
router.get('/incidents/recent', protect, getRecentIncidents);

export default router;
