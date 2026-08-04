import { z } from "zod";

export const idSchema = z.object({
  id: z
    .string()
    .min(1, "Event ID is required")
    .uuid("Invalid Event ID"),
});

export type IdSchema = z.infer<typeof idSchema>;
