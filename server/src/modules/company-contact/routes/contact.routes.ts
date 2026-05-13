import express from 'express';
import { 
  submitInquiry, 
  getInquiries, 
  requestDemo, 
  getEnterpriseSupportStatus 
} from '../controllers/ContactController';
import { protect } from '../../../middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/inquiries', submitInquiry);
router.post('/demo-request', requestDemo);
router.get('/enterprise-support', getEnterpriseSupportStatus);

// Protected routes (for admins to view inquiries)
router.get('/inquiries', protect, getInquiries);

export default router;
