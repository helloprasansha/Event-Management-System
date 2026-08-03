import { CalendarDaysIcon, MapPinIcon, SquarePen, Trash, UsersIcon } from "lucide-react";

import { db } from "@/db";
import { events } from "@/db/schema";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { deleteEvent } from "@/app/(admin)/admin/events/actions/deleteevent";

export default async function EventDetails() {
  const eventList = await db.select().from(events);

  return (
    <Card>

      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <CardTitle>Event Details</CardTitle>
            <CardDescription>
              Keep track of your next scheduled experiences.
            </CardDescription>
          </div>
          <div>
            <Link
              href="/admin/events/calendar"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Admin calendar
            </Link>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {eventList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="space-y-1">
              <p className="font-medium">{item.title}</p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CalendarDaysIcon className="size-3.5" />
                  {item.event_Date}
                </span>

                <span className="flex items-center gap-1">
                  <MapPinIcon className="size-3.5" />
                  {item.venue}
                </span>

                <span className="flex items-center gap-1">
                  <UsersIcon className="size-3.5" />
                  {item.capacity} capacity
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <Badge variant="outline">
                {item.status}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Link href={`/admin/events/${item.id}/edits`}>
                <SquarePen size={24} className="cursor-pointer" />
              </Link>

              <form action={deleteEvent} method="post" className="inline">
                <input type="hidden" name="id" value={item.id} />
                <button type="submit" className="rounded-full p-2 text-destructive hover:bg-destructive/10">
                  <Trash size={24} />
                </button>
              </form>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
