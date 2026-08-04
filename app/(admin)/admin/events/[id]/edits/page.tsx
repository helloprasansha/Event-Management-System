import { db } from "@/db";
import { events } from "@/db/schema";
import { EventEditForm } from "@/components/event-edit-form";
import { eq } from "drizzle-orm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditEventPage({ params }: Props) {
  const { id } = await params;

  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
  if (!isUuid) {
    return <h1>Event not found</h1>;
  }

  const [currentEvent] = await db
    .select()
    .from(events)
    .where(eq(events.id, id));

  if (!currentEvent) {
    return <h1>Event not found</h1>;
  }

  return <EventEditForm event={{
    id: currentEvent.id,
    title: currentEvent.title,
    description: currentEvent.description,
    venue: currentEvent.venue,
    eventDate: currentEvent.event_Date?.toString() ?? "",
    startTime: currentEvent.Start_Time?.toString() ?? "",
    endTime: currentEvent.End_Time?.toString() ?? "",
    capacity: currentEvent.capacity,
    price: currentEvent.price,
    banner: currentEvent.banner,
    status: currentEvent.status ?? "upcoming",
  }} />;
}
