import React from 'react';
import GetAllEvents, { eventType } from './action/getAllEvents';
import { EventsCard } from './eventsCard/eventsCard';

export default async function EventsPage() {
  const response = await GetAllEvents();

  if (!response.success) {
    return <div>Error: {response.message}</div>;
  }

  return (
    <div className="space-y-6 px-4 py-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Events</h1>
        <p className="text-sm text-slate-600">Browse scheduled events available to users.</p>
      </div>

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
            No events are available right now.
          </div>
        )}
      </div>
    </div>
  );
}
