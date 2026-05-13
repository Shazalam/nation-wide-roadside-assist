import express from 'express';
import { 
  createDispatch, 
  getActiveDispatches, 
  getDispatchQueues, 
  getTowUnits 
} from '../controllers/DispatchController';
import { protect } from '../../../middleware/authMiddleware';

const router = express.Router();

// Dispatch APIs
router.post('/create', createDispatch); // Public for API sim, or add protect for real use
router.get('/active', getActiveDispatches);
router.get('/queues', getDispatchQueues);
router.get('/tow-units', getTowUnits);

export default router;
