"use server";

import { db } from "@/db";
import { BookingTable, events } from "@/db/schema/event-schema";
import { bookingSchema } from "@/lib/validation/booking-schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function createBooking(formData: FormData) {
  try {
    // Get logged-in user
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        message: "Please login before booking an event.",
      };
    }

    // Get form values
    const eventId = formData.get("eventId")?.toString();
    const quantity = Number(formData.get("quantity"));

    // Validate
    const validated = bookingSchema.safeParse({
      eventId,
      quantity,
    });

    if (!validated.success) {
      return {
        success: false,
        message: validated.error.issues[0]?.message ?? "Invalid booking data.",
      };
    }

    // Find event
    const [event] = await db
      .select()
      .from(events)
      .where(eq(events.id, validated.data.eventId));

    if (!event) {
      return {
        success: false,
        message: "Event not found.",
      };
    }

    // Calculate total on SERVER
    const totalAmount = event.price * validated.data.quantity;

    // Create booking
    await db.insert(BookingTable).values({
      userId: session.user.id,
      eventId: validated.data.eventId,
      quantity: validated.data.quantity,
      totalAmount,
      paymentStatus: "unpaid",
      bookingStatus: "pending",
    });

    return {
      success: true,
      message: "Event booked successfully.",
    };
  } catch (error) {
    console.error("Booking Error:", error);

    return {
      success: false,
      message: "Failed to book event.",
    };
  }
}