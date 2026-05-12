import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/db';

// Routes
import authRoutes from './routes/authRoutes';
import incidentRoutes from './routes/incidentRoutes';
import telemetryRoutes from './routes/telemetryRoutes';
import vendorRoutes from './routes/vendorRoutes';
import auditRoutes from './routes/auditRoutes';
import webhookRoutes from './routes/webhookRoutes';
import fleetRoutes from './routes/fleetRoutes';
import rvDispatchRoutes from './routes/rvDispatchRoutes';
import commercialRecoveryRoutes from './modules/commercial-recovery/routes/commercialRecoveryRoutes';
import insuranceRoutes from './modules/insurance-programs/routes/insuranceRoutes';
import fleetOpsRoutes from './modules/fleet-operations/routes/fleetRoutes';

// Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware';
import { rateLimiter } from './middleware/rateLimiter';
import { SLAService } from './services/slaService';

dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Security & Base Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Global Rate Limiter (100 req per minute)
app.use('/api', rateLimiter(100, 60000));

// Routes Integration
app.use('/api/auth', authRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/telemetry', telemetryRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/audit', auditRoutes);
app.use('/api/webhooks', webhookRoutes);
app.use('/api/fleets', fleetRoutes);
app.use('/api/rv', rvDispatchRoutes);
app.use('/api/recovery', commercialRecoveryRoutes);
app.use('/api/insurance-programs', insuranceRoutes);
app.use('/api/fleet-operations', fleetOpsRoutes);

// Background Services: SLA Monitoring (Runs every 30 seconds)
setInterval(async () => {
  try {
    const breaches = await SLAService.monitorActiveDispatches();
    if (breaches > 0) {
      console.log(`[SLA MESH] Processed ${breaches} operational breaches.`);
    }
  } catch (error) {
    console.error('[SLA MESH ERROR]', error);
  }
}, 30000);

// Health Check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date(),
    mesh_version: '4.2.1-stable',
    system_load: process.uptime()
  });
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[INFRA] Operational Mesh active on port ${PORT}`);
});
