import React from 'react'
import GetAllEvents, { eventType } from './action/getAllEvents';
import { EventsCard } from './eventsCard/eventsCard';

export default async function EventsPage() {


    const response= await GetAllEvents();
if (!response.success) {
    return <div>Error: {response.message}</div>;
}

  return (
    <div className=''>
        <h1>Events</h1>
        <div className='gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 m-2'>
            {response.data?.map((event: eventType) => (
                <EventsCard
                id={event.id}
                title={event.title}
                status={event.status ?? ""}
                venue={event.venue}
                startTime= {event.Start_Time}
                endTime={event.End_Time}
                eventDate={event.event_Date}
                price= {event.price}
                  />
            ))}
            
        </div>
    </div>
  )
}
