import { z } from 'zod';
import { messageFieldSchema } from '../field/sin';

// /sin/create
export const createSinSchema = z.object({
  message: messageFieldSchema,
});

// /sin
export const getSinSchema = z.object({
  page: z
    .string()
    .transform((val) => {
      const parsed = Number(val);
      return isNaN(parsed) ? 1 : parsed;
    })
    .optional()
    .default(1),
});

// /sin/:id/rate
export const rateSinParamSchema = z.object({
  id: z.string().transform(Number),
});

export const rateSinBodySchema = z.object({
  type: z.enum(['heaven', 'hell']),
});
