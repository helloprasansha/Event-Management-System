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
import { updateBooking } from "./actions/updateBooking";

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
    <div className="rounded-3xl border bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b p-6">
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-sm text-muted-foreground">
            Manage and review all event bookings.
          </p>
        </div>

        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
          {bookings.length} Bookings
        </div>
      </div>

      {/* Filter */}
      <div className="border-b p-6">
        <form
          method="GET"
          className="flex flex-wrap items-center gap-4"
        >
          <select
             defaultValue={selectedEventId ?? ""}
            className="h-11 rounded-full border px-4"
          >
            <option value="">All Events</option>

            {eventsList.map((event) => (
              <option
                key={event.id}
                value={event.id}
              >
                {event.title}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="rounded-full bg-slate-900 px-5 py-2 text-white"
          >
            Apply Filter
          </button>

          <a
            href="/admin/Bookings"
            className="rounded-full border px-5 py-2"
          >
            Clear
          </a>
        </form>
      </div>

      {/* Booking Cards */}
      <div className="space-y-5 p-6">

        {bookings.length === 0 ? (
  <div className="rounded-2xl border border-dashed py-16 text-center">
    <h3 className="text-lg font-semibold">No bookings found</h3>
    <p className="mt-2 text-sm text-slate-500">
      No bookings have been made yet.
    </p>
  </div>
) : (
  bookings.map((booking) => (
    <form
      key={booking.id}
      action={updateBooking}
      className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <input
        type="hidden"
        name="bookingId"
        value={booking.id}
      />

      <input
        type="hidden"
        name="event"
        value={selectedEventId ?? ""}
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {booking.eventTitle}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {booking.eventDate} • {booking.venue}
          </p>
        </div>

        <div className="rounded-full bg-slate-100 px-4 py-1 text-sm">
          {booking.bookingStatus}
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 border-t" />

      {/* User Info */}
      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Booked By
          </p>

          <p className="mt-1 font-semibold">
            {booking.userName}
          </p>

          <p className="text-sm text-slate-500">
            {booking.userEmail}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Quantity
            </p>

            <p className="mt-1 text-lg font-semibold">
              {booking.quantity}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Total
            </p>

            <p className="mt-1 text-lg font-semibold">
              Rs. {booking.totalAmount}
            </p>
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="my-5 border-t" />

            {/* Admin Controls */}
      <div className="grid gap-5 border-t pt-5 md:grid-cols-3">

        {/* Payment Status */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Payment Status
          </label>

          <select
            name="paymentStatus"
            defaultValue={booking.paymentStatus ?? "unpaid"}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="paid"> Paid</option>
            <option value="unpaid"> Unpaid</option>
            <option value="failed"> Failed</option>
          </select>
        </div>

        {/* Booking Status */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Booking Status
          </label>

          <select
            name="bookingStatus"
            defaultValue={booking.bookingStatus ?? "pending"}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 shadow-sm focus:border-slate-400 focus:outline-none"
          >
            <option value="pending"> Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled"> Cancelled</option>
          </select>
        </div>

        {/* Save */}
        <div className="flex items-end justify-end">
          <button
            type="submit"
            className="h-11 rounded-xl bg-emerald-600 px-8 font-semibold text-white transition hover:bg-emerald-700"
          >
            Save Changes
          </button>
        </div>

      </div>

    </form>
  ))
)}

      </div>
    </div>
  </div>

  )
}