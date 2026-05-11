import { Request, Response, NextFunction } from 'express';

const rates = new Map<string, { count: number, reset: number }>();

export const rateLimiter = (limit: number, windowMs: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip || 'global';
    const now = Date.now();
    const rate = rates.get(key) || { count: 0, reset: now + windowMs };

    if (now > rate.reset) {
      rate.count = 0;
      rate.reset = now + windowMs;
    }

    rate.count++;
    rates.set(key, rate);

    res.setHeader('X-RateLimit-Limit', limit);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, limit - rate.count));
    res.setHeader('X-RateLimit-Reset', Math.ceil(rate.reset / 1000));

    if (rate.count > limit) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests, please try again later.'
      });
    }

    next();
  };
};
