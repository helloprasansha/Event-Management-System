import React from 'react';
import Link from 'next/link';
import GetAllEvents, { eventType } from '../action/getAllEvents';
import { EventsCard } from '../eventsCard/eventsCard';

type EventCalendarPageProps = {
  searchParams?: { date?: string };
};

export default async function EventCalendarPage({ searchParams }: EventCalendarPageProps) {
  const selectedDate = searchParams?.date ?? new Date().toISOString().slice(0, 10);
  const response = await GetAllEvents(selectedDate);

  if (!response.success) {
    return <div>Error: {response.message}</div>;
  }

  return (
    <div className="space-y-6 px-4 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Event Calendar</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Pick a date to see all events happening on that day. This page is dedicated to date-based event lookups.
          </p>
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <form method="get" action="/events/calendar" className="flex flex-wrap items-end gap-3">
            <label className="flex flex-col gap-1 text-sm text-slate-700">
              <span>Select a date</span>
              <input
                type="date"
                name="date"
                defaultValue={selectedDate}
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
          <Link
            href="/events"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Back to event list
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm text-slate-700">
          Showing events for <strong>{new Date(selectedDate).toLocaleDateString()}</strong>.
        </p>
      </div>

      {response.data?.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {response.data.map((event: eventType) => (
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
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-600">
          No events are scheduled for this date.
        </div>
      )}
    </div>
  );
}
