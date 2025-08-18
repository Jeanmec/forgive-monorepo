import { z } from 'zod';
import { messageFieldSchema } from '../field/sin';

export const createSinSchema = z.object({
  message: messageFieldSchema,
});
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
