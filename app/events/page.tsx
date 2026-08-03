import React from 'react'
import GetAllEvents, { eventType } from './action/getAllEvents';
import { EventsCard } from './eventsCard/eventsCard';

export default async function EventsPage() {


    const response= await GetAllEvents();
if (!response.success) {
    return <div>Error: {response.message}</div>;
}

  return (
    <div>
        <h1>Events</h1>
        <div>
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
