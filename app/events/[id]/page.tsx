import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { db } from "@/db";
import { events } from "@/db/schema/event-schema";
import { eq } from "drizzle-orm";
import EventBookingForm from "@/components/event-booking-form";

type EventPageProps = {
  params: Promise<{
    id: string | string[];
  }>;
};

export default async function EventDetailPage({ params }: EventPageProps) {
  const { id } = await params;
  const eventId = Array.isArray(id) ? id[0] : id;
  const decodedEventId = eventId ? decodeURIComponent(eventId) : "";

  if (!decodedEventId) {
    return (
      <div className="space-y-6 px-4 py-6">
        <h1 className="text-3xl font-semibold text-slate-900">Event not found</h1>
        <p className="text-sm text-slate-600">The event you are looking for does not exist or may have been removed.</p>
        <Link href="/events" className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Back to events
        </Link>
      </div>
    );
  }

  const [event] = await db
    .select()
    .from(events)
    .where(eq(events.id, decodedEventId));

  if (!event) {
    const availableEventIds = (await db.select({ id: events.id }).from(events)).map((item) => item.id);

    return (
      <div className="space-y-6 px-4 py-6">
        <h1 className="text-3xl font-semibold text-slate-900">Event not found</h1>
        <p className="text-sm text-slate-600">The event you are looking for does not exist or may have been removed.</p>
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <p className="font-semibold">Debug info</p>
          <pre className="overflow-x-auto text-xs">{JSON.stringify({ decodedEventId, availableEventIds }, null, 2)}</pre>
        </div>
        <Link href="/events" className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Back to events
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(event.event_Date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeRange = `${event.Start_Time} - ${event.End_Time}`;

  return (
    <div className="space-y-6 px-4 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">{event.title}</h1>
          <p className="max-w-2xl text-sm text-slate-600">View full details for this event and reserve your spot with Book Now.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/events" className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200">
            Back to events
          </Link>
          <Badge variant="outline">{event.status}</Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card className="overflow-hidden">
          <img
            src={event.banner ?? "https://avatar.vercel.sh/shadcn1"}
            alt={event.title}
            className="h-72 w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Event details</CardTitle>
            <CardDescription>Everything you need to know before booking.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">Date</p>
              <p className="text-lg font-semibold text-slate-900">{formattedDate}</p>
            </div>
            <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">Time</p>
              <p className="text-lg font-semibold text-slate-900">{timeRange}</p>
            </div>
            <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">Venue</p>
              <p className="text-lg font-semibold text-slate-900">{event.venue}</p>
            </div>
            <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">Capacity</p>
              <p className="text-lg font-semibold text-slate-900">{event.capacity} attendees</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-600">Description</p>
              <p className="mt-2 text-base leading-7 text-slate-800">{event.description}</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Book this event</CardTitle>
              <CardDescription>Reserve your spot now and pay later.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">Price per ticket</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">Rs. {event.price}</p>
                </div>
                <EventBookingForm eventId={event.id} price={event.price} maxQuantity={event.capacity} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Status:</span> {event.status}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Organizer:</span> {event.createdBy ?? "Event team"}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Booking expires:</span> {event.Booking_ExpiredAt?.toLocaleDateString() ?? "N/A"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


