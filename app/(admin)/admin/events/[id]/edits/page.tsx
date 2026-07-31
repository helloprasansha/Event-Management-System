import { db } from "@/db";
import { event } from "@/db/schema";
import { eq } from "drizzle-orm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditEventPage({ params }: Props) {
  const { id } = await params;

  const events = await db
    .select()
    .from(event)
    .where(eq(event.id, id));

  const currentEvent = events[0];

  if (!currentEvent) {
    return <h1>Event not found</h1>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Edit Event</h1>

      <p>Title: {currentEvent.title}</p>
      <p>Venue: {currentEvent.venue}</p>
      <p>Capacity: {currentEvent.capacity}</p>
    </div>
  );
} 
       