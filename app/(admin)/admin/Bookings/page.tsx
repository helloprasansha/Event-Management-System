import { BookingTable, events, user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BookingsPageProps {
  searchParams?: Promise<{
    event?: string;
  }>;
}

export default async function BookingsPage({ searchParams }: BookingsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const selectedEventId = resolvedSearchParams?.event || undefined;
  const eventsList = await db.select({ id: events.id, title: events.title }).from(events).orderBy(events.title);

  const bookingsQuery = db
    .select({
      id: BookingTable.id,
      eventId: BookingTable.eventId,
      eventTitle: events.title,
      eventDate: events.event_Date,
      venue: events.venue,
      quantity: BookingTable.quantity,
      totalAmount: BookingTable.totalAmount,
      paymentStatus: BookingTable.paymentStatus,
      bookingStatus: BookingTable.bookingStatus,
      bookedAt: BookingTable.registeredAt,
      userName: user.name,
      userEmail: user.email,
    })
    .from(BookingTable)
    .leftJoin(events, eq(BookingTable.eventId, events.id))
    .leftJoin(user, eq(BookingTable.userId, user.id));

  const bookings = selectedEventId
    ? await bookingsQuery.where(eq(BookingTable.eventId, selectedEventId))
    : await bookingsQuery;

  return (
    <div className="space-y-6 p-6">
      <div className="rounded-3xl border border-slate-200 bg-white/95 shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Bookings</h1>
            <p className="mt-1 text-sm text-slate-500">
              Filter bookings by event so the admin can inspect one event's reservations.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            {bookings.length} booking{bookings.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="border-b border-slate-200 px-6 py-4">
          <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" method="get">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label htmlFor="event" className="text-sm font-medium text-slate-700">
                Filter by event
              </label>
              <select
                id="event"
                name="event"
                defaultValue={selectedEventId?.toString() ?? ""}
                className="h-10 rounded-4xl border border-input bg-input/30 px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <option value="">All events</option>
                {eventsList.map((eventItem) => (
                  <option key={eventItem.id} value={eventItem.id}>
                    {eventItem.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-4xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Apply filter
              </button>
              <a
                href="/admin/Bookings"
                className="rounded-4xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Clear
              </a>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto px-6 py-6">
          <Table className="min-w-[960px]">
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Booked by</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center text-sm text-slate-500">
                    No bookings available yet.
                  </TableCell>
                </TableRow>
              ) : (
                bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.eventTitle || "-"}</TableCell>
                    <TableCell>{booking.eventDate || "-"}</TableCell>
                    <TableCell>{booking.venue || "-"}</TableCell>
                    <TableCell>{booking.userName || "Unknown"}</TableCell>
                    <TableCell>{booking.userEmail || "-"}</TableCell>
                    <TableCell>{booking.quantity}</TableCell>
                    <TableCell>Rs. {booking.totalAmount}</TableCell>
                    <TableCell>{booking.paymentStatus || "-"}</TableCell>
                    <TableCell>{booking.bookingStatus || "-"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}