import express from 'express';
import { 
  createDispatch, 
  getActiveDispatches, 
  updateDispatchStatus, 
  getVendorAnalytics 
} from '../controllers/VendorController';
import { protect } from '../../../middleware/authMiddleware';

const router = express.Router();

// Base routes: /api/vendor-coordination
router.route('/dispatch')
  .post(protect, createDispatch)
  .get(protect, getActiveDispatches);

router.route('/dispatch/:id')
  .put(protect, updateDispatchStatus);

router.route('/analytics')
  .get(protect, getVendorAnalytics);

export default router;
