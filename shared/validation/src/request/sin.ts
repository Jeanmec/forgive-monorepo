import { z } from 'zod';
import { messageFieldSchema } from '../field/sin';

export const createSinSchema = z.object({
  message: messageFieldSchema,
});
