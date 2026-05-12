import express from 'express';
import { createDispatch, getDispatchStatus, updateDispatchTelemetry } from '../controllers/rvDispatchController';

const router = express.Router();

// RV Dispatch Operations API Endpoints
router.post('/dispatch', createDispatch);
router.get('/dispatch/:id', getDispatchStatus);
router.put('/dispatch/:id/telemetry', updateDispatchTelemetry);

export default router;
