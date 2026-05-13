import { Router } from 'express';
import { getVendors, getDispatches, getCoverage, getTelemetry, getAnalytics } from '../controllers/vendor.controller';

const router = Router();

router.get('/vendors', getVendors);
router.get('/dispatch', getDispatches);
router.get('/coverage', getCoverage);
router.get('/telemetry', getTelemetry);
router.get('/analytics', getAnalytics);

export default router;
