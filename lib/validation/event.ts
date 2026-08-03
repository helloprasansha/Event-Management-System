import { z } from "zod";

export const eventSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  venue: z
    .string()
    .min(2, "Venue is required"),

  event_Date: z.string().min(1, "Event date is required"),

  Start_Time: z.string().min(1, "Start time is required"),

  End_Time: z.string().min(1, "End time is required"),

  capacity: z.coerce
    .number()
    .min(1, "Capacity must be greater than 0"),

  price: z.coerce
    .number()
    .min(0, "Price cannot be negative"),

status: z
  .enum(["upcoming", "ongoing", "completed"])
  .optional(),
});

export type EventSchema = z.infer<typeof eventSchema>;

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  venue: z
    .string()
    .min(2, "Venue is required"),

  eventDate: z.string().min(1, "Event date is required"),

  startTime: z.string().min(1, "Start time is required"),

  endTime: z.string().min(1, "End time is required"),

  capacity: z
    .number({ error: "Capacity is required" })
    .refine((value) => !Number.isNaN(value), "Capacity is required")
    .min(1, "Capacity must be greater than 0"),

  price: z
    .number({ error: "Price is required" })
    .refine((value) => !Number.isNaN(value), "Price is required")
    .min(0, "Price cannot be negative"),

  banner: z
    .string()
    .refine(
      (value) => value === "" || z.string().url().safeParse(value).success,
      "Must be a valid URL"
    )
    .optional(),
});

export type EventFormSchema = z.infer<typeof eventFormSchema>;

export const eventEditFormSchema = eventFormSchema.extend({
  status: z.enum(["upcoming", "ongoing", "completed"]),
});

export type EventEditFormSchema = z.infer<typeof eventEditFormSchema>;

