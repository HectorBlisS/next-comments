import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const commentSchema = z.object({
  id: z.string(),
  userId: z.number(),
  user: userSchema,
  social: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
