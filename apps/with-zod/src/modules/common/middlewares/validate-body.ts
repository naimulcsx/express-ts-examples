import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';

export function validateBody(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body); // Use safeParse

    if (!result.success) {
      // If validation fails, return a 400 response with error details
      return res.status(400).json({
        message: 'Validation failed',
        errors: result.error.errors.map((err) => ({
          field: err.path[0],
          issues: err.message,
        })),
      });
    }

    // Proceed if validation passes
    next();
  };
}
