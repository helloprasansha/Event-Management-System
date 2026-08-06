"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { BookingTable } from "@/db/schema";

const paymentStatuses = ["paid", "unpaid", "failed"] as const;
const bookingStatuses = ["pending", "confirmed", "cancelled"] as const;

export async function updateBooking(formData: FormData) {
  const bookingId = formData.get("bookingId")?.toString();
  const paymentStatus = formData.get("paymentStatus")?.toString();
  const bookingStatus = formData.get("bookingStatus")?.toString();
  const eventFilter = formData.get("event")?.toString() ?? "";

  if (!bookingId) {
    redirect(`/admin/Bookings${eventFilter ? `?event=${encodeURIComponent(eventFilter)}` : ""}`);
  }

  const normalizedPayment = paymentStatus && paymentStatuses.includes(paymentStatus as (typeof paymentStatuses)[number])
    ? (paymentStatus as (typeof paymentStatuses)[number])
    : "unpaid";

  const normalizedBooking = bookingStatus && bookingStatuses.includes(bookingStatus as (typeof bookingStatuses)[number])
    ? (bookingStatus as (typeof bookingStatuses)[number])
    : "pending";

  await db
    .update(BookingTable)
    .set({
      paymentStatus: normalizedPayment,
      bookingStatus: normalizedBooking,
    })
    .where(eq(BookingTable.id, bookingId));

  revalidatePath("/admin/Bookings");
  redirect(`/admin/Bookings${eventFilter ? `?event=${encodeURIComponent(eventFilter)}` : ""}`);
}
