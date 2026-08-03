import { CalendarDaysIcon, MapPinIcon, UsersIcon } from "lucide-react";

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

export async function UpcomingEvents() {
  const eventList = await db.select().from(events);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>
          Keep track of your next scheduled experiences.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {eventList.map((item) => (
          <div
            key={item.id}
            className="grid gap-4 rounded-xl border bg-muted/5 p-4 md:grid-cols-[120px_minmax(0,1fr)] md:items-center"
          >
            <div className="overflow-hidden rounded-2xl bg-slate-200">
              <img
                src={item.banner ?? "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80"}
                alt={`${item.title} banner`}
                className="h-28 w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div>
                <p className="text-lg font-semibold leading-tight">{item.title}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
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

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Badge
                  variant={
                    item.status === "ongoing"
                      ? "default"
                      : item.status === "completed"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {item.status}
                </Badge>
                <div className="text-sm text-muted-foreground">View details for this event.</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
