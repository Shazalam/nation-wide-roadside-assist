import express from 'express';
import { getVendors, updateVendorCompliance } from '../controllers/vendorController';
import { protect, authorize } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', protect, getVendors);
router.patch('/:id/compliance', protect, authorize('admin'), updateVendorCompliance);

export default router;
