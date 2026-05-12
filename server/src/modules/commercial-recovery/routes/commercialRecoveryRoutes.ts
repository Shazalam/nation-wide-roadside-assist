import { Router } from 'express';
import * as controller from '../controllers/commercialRecoveryController';

const router = Router();

// /api/recovery/incidents
router.get('/incidents', controller.getIncidents);
router.post('/incidents', controller.createIncident);

// /api/recovery/dispatch
router.get('/dispatch', controller.getDispatchEvents);

// /api/recovery/fleet
router.get('/fleet', controller.getFleet);

// /api/recovery/vendors
router.get('/vendors', controller.getVendors);

// /api/recovery/analytics
router.get('/analytics', controller.getAnalytics);

// /api/recovery/telemetry
router.get('/telemetry', controller.getTelemetry);

export default router;
