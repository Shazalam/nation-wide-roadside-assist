import { Router } from 'express';
import { dispatchController } from '../controllers/dispatchController';
import { protect } from '../../../middleware/auth';

const router = Router();

router.get('/incidents', protect, dispatchController.getIncidents);
router.get('/stats', dispatchController.getStats);
router.get('/vendors', protect, dispatchController.getVendors);
router.post('/incidents', protect, dispatchController.createIncident);

export default router;
