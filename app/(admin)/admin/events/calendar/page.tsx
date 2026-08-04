import React from 'react';
import GetAllEvents, { eventType } from '@/app/events/action/getAllEvents';
import { EventsCard } from '@/app/events/eventsCard/eventsCard';

type AdminEventCalendarProps = {
  searchParams: Promise<{
    date?: string | string[];
  }>;
};

export default async function AdminEventCalendar({
  searchParams,
}: AdminEventCalendarProps) {
  // ✅ Await searchParams
  const params = await searchParams;

  const selectedDate = Array.isArray(params.date)
    ? params.date[0]
    : params.date;

  const response = await GetAllEvents(selectedDate);

  if (!response.success) {
    return <div>Error: {response.message}</div>;
  }

  return (
    <div className="space-y-6 px-4 py-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Admin Event Calendar</h1>
        <p className="text-sm text-slate-600">
          Filter events by date from the admin dashboard.
        </p>
      </div>

      <form method="get" action="/admin/events/calendar" className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col gap-1 text-sm text-slate-700">
          <span>Select date</span>
          <input
            type="date"
            name="date"
            defaultValue={selectedDate ?? new Date().toISOString().slice(0, 10)}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Filter
        </button>
      </form>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {response.data?.length ? (
          response.data.map((event: eventType) => (
            <EventsCard
              key={event.id}
              id={event.id}
              title={event.title}
              status={event.status ?? ''}
              venue={event.venue}
              startTime={event.Start_Time}
              endTime={event.End_Time}
              eventDate={event.event_Date}
              price={event.price}
            />
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-600">
            No events scheduled for this date.
          </div>
        )}
      </div>
    </div>
  );
}
