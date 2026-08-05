import { z } from "zod";

export const bookingSchema = z.object({
  eventId: z.string().uuid("Invalid event ID"),

  quantity: z.coerce
    .number()
    .min(1, "At least one ticket is required")
    .max(10, "Maximum 10 tickets can be booked at once"),
});

export type BookingSchema = z.infer<typeof bookingSchema>;