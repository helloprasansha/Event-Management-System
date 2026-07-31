import { CalendarDaysIcon, Delete, MapPinIcon, SquarePen, Trash, UsersIcon, } from "lucide-react";

import { db } from "@/db";
import { event } from "@/db/schema";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function EventDetails() {
  const events = await db.select().from(event);

  console.log(events);

  return (
    <Card>

      <CardHeader>
        <CardTitle>Event Details</CardTitle>
        <CardDescription>
          Keep track of your next scheduled experiences.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {events.map((item) => (
          <><div
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
            <div className="flex gap-4">
             <Link href={`/admin/events/${item.id}/edits`}>
  <SquarePen size={24} className="cursor-pointer" />
</Link>

              </div>
              <div className="flex gap-4">
              <Trash size={24} className="cursor-pointer" />
            </div>
          </div></>
        ))}
      </CardContent>
    </Card>
  );
}