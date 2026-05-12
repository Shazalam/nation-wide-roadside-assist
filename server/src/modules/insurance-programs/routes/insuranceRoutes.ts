import { Router } from 'express';
import { insuranceController } from '../controllers/insuranceController';
import { protect } from '../../../middleware/auth';

const router = Router();

router.get('/claims', insuranceController.getClaims);
router.get('/stats', insuranceController.getStats);
router.post('/dispatch', insuranceController.createClaim);

export default router;
