# Nationwide Trans Inc. Backend Architecture

This is the enterprise-grade MERN backend for the Nationwide Trans mobility mesh.

## 🏗️ Folder Structure

- `src/config/`: Database and environment configurations.
- `src/controllers/`: Request handlers for Auth, Incidents, Telemetry, etc.
- `src/middleware/`: Security, RBAC, Rate Limiting, and Error handling.
- `src/models/`: MongoDB/Mongoose schemas with strict type safety.
- `src/routes/`: API endpoint definitions with RBAC protection.
- `src/services/`: Core business logic (SLA Mesh, Event Engine, Webhook Processor).

## 🚀 Key Features

- **RBAC (Role Based Access Control)**: Managed via `User` roles (admin, dispatcher, vendor, client).
- **Dispatch Event Engine**: Propagates state changes across the mesh and triggers webhooks.
- **SLA Monitoring**: Background service that detects and logs operational breaches in real-time.
- **Telemetry Pipeline**: High-volume ingestion for GPS and asset diagnostics.
- **Audit Mesh**: Comprehensive logging of all critical system actions.
- **Webhook System**: Secure HMAC-signed events for third-party integrations.

## 🔒 Security Best Practices

- **Helmet.js**: Sets security-related HTTP headers.
- **JWT & HTTP-Only Cookies**: Secure session management.
- **Rate Limiting**: Custom middleware to prevent brute-force and DDoS attacks.
- **Input Validation**: Strict schema validation using `express-validator`.
- **Audit Logging**: Every sensitive action is tracked in the `AuditLog` collection.

## 📦 Production Deployment

1. **Build**: `npm run build` (transpiles TS to JS).
2. **Cluster**: Use PM2 for clustering and auto-restarts.
3. **Gateway**: Recommended to use Nginx as a reverse proxy with SSL termination.
4. **Environment**: Ensure `NODE_ENV=production` is set to disable detailed error stacks.
