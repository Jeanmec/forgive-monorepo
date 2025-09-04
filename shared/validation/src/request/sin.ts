import { z } from 'zod';
import { messageFieldSchema } from '../field/sin';

// /sin/create
export const createSinSchema = z.object({
  message: messageFieldSchema,
});

// /sin
export const getSinSchema = z.object({
  take: z
    .preprocess((val) => Number(val), z.number().min(0).default(10))
    .optional(),
  skip: z
    .preprocess((val) => Number(val), z.number().min(0).default(0))
    .optional(),
});

// /sin/:id/rate
export const rateSinParamSchema = z.object({
  id: z.string().transform(Number),
});

export const rateSinBodySchema = z.object({
  type: z.enum(['heaven', 'hell']),
});
