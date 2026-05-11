import express from 'express';
import { 
  registerWebhook, 
  getMyWebhooks, 
  deleteWebhook 
} from '../controllers/webhookController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/')
  .post(protect, registerWebhook)
  .get(protect, getMyWebhooks);

router.route('/:id')
  .delete(protect, deleteWebhook);

export default router;
