import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to restrict access based on user role.
 * Assumes req.user is populated by the auth middleware.
 */
export const authorize = (allowedRoles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Permission denied: Insufficient role clearance.',
        required: allowedRoles,
        current: req.user.role
      });
    }

    next();
  };
};
