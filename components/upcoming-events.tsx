import { CalendarDaysIcon, MapPinIcon, UsersIcon } from "lucide-react";

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

export async function UpcomingEvents() {
  const events = await db.select().from(event);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>
          Keep track of your next scheduled experiences.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {events.map((item) => (
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

            <Badge variant="outline">
              {item.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}