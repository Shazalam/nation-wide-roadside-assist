import express from 'express';
import { 
  createContinuation, 
  getContinuations, 
  updateContinuationStatus, 
  getContinuationAnalytics 
} from '../controllers/ContinuationController';
import { protect } from '../../../middleware/authMiddleware';

const router = express.Router();

// Base routes: /api/trip-continuation
router.route('/incidents')
  .post(protect, createContinuation)
  .get(protect, getContinuations);

router.route('/incidents/:id')
  .put(protect, updateContinuationStatus);

router.route('/analytics')
  .get(protect, getContinuationAnalytics);

export default router;
