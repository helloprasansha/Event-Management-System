"use server";

import { db } from "@/db";
import { BookingTable, events } from "@/db/schema/event-schema";
import { bookingSchema } from "@/lib/validation/booking-schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { sendBookingConfirmationEmail } from "@/lib/email/sendBooking";

export async function createBooking(formData: FormData) {
  try {
   
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        message: "Please login before booking an event.",
      };
    }

   
    const eventId = formData.get("eventId")?.toString();
    const quantity = Number(formData.get("quantity"));

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

   
    const totalAmount = event.price * validated.data.quantity;

    
    await db.insert(BookingTable).values({
      userId: session.user.id,
      eventId: validated.data.eventId,
      quantity: validated.data.quantity,
      totalAmount,
      paymentStatus: "unpaid",
      bookingStatus: "pending",
    });

    try {
  await sendBookingConfirmationEmail({
    email: session.user.email,
    name: session.user.name,
    eventTitle: event.title,
    eventDate: event.event_Date.toString(),
    venue: event.venue,
    quantity: validated.data.quantity,
    total: totalAmount,
  });

  console.log("Sending to:", session.user.email);

  console.log(" Email sent successfully");
} catch (error) {
  console.error(" Email failed:", error);
}
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




