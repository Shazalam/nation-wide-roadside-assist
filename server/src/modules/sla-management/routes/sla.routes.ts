import { Router } from 'express';
import { getMetrics, getVendors, getDispatch, getAnalytics, getCompliance } from '../controllers/sla.controller';

const router = Router();

router.get('/metrics', getMetrics);
router.get('/vendors', getVendors);
router.get('/dispatch', getDispatch);
router.get('/analytics', getAnalytics);
router.get('/compliance', getCompliance);

export default router;
