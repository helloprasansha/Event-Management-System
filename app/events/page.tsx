import React from "react";
import GetAllEvents, { eventType } from "./action/getAllEvents";
import { EventsCard } from "./eventsCard/eventsCard";

export default async function EventsPage() {
  const response = await GetAllEvents();

  if (!response.success) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-red-500">{response.message}</p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Events</h1>

        <p className="mt-2 text-slate-600">
          Browse all available events and register for your favorites.
        </p>
      </div>

      {response.data?.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {response.data.map((event: eventType) => (
            <EventsCard
              key={event.id}
              id={event.id}
              title={event.title}
              status={event.status ?? ""}
              venue={event.venue}
              startTime={event.Start_Time}
              endTime={event.End_Time}
              eventDate={event.event_Date}
              price={event.price}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed p-8 text-center text-slate-500">
          No events available.
        </div>
      )}
    </main>
  );
}