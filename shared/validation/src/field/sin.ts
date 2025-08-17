import { z } from 'zod';

export const messageFieldSchema = z
  .string()
  .min(35, { message: 'The message must be at least 35 characters long.' })
  .max(255, { message: 'The message must be at most 255 characters long.' });

export const hellFieldSchema = z
  .number()
  .min(0, { message: 'Field: Hell must be a positive number.' });
export const heavenFieldSchema = z
  .number()
  .min(0, { message: 'Field: Heaven must be a positive number.' });
