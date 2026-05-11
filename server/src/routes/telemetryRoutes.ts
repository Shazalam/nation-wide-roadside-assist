import express from 'express';
import { TelemetryController } from '../controllers/telemetryController';
import { protect, authorize } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/ingest', protect, authorize('vendor', 'admin'), TelemetryController.ingest);
router.get('/snapshot', protect, TelemetryController.getMapSnapshot);

export default router;
