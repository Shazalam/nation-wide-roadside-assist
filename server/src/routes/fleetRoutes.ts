import express from 'express';
import { 
  getFleets, 
  createFleetAsset, 
  updateFleetTelemetry, 
  getFleetById 
} from '../controllers/fleetController';
import { protect, authorize } from '../middleware/auth';

const router = express.Router();

// All routes require authentication
router.use(protect);

router.get('/', authorize('admin', 'operator', 'enterprise_user'), getFleets);
router.get('/:id', authorize('admin', 'operator', 'enterprise_user'), getFleetById);
router.post('/', authorize('admin', 'operator'), createFleetAsset);
router.patch('/:id/telemetry', authorize('admin', 'operator', 'system'), updateFleetTelemetry);

export default router;
