import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Clock4, MapPin } from "lucide-react";

interface eventCardType {
  id: string;
  title: string;
  status: string;
  venue: string;
  startTime: string;
  endTime: string;
  eventDate: string;
  price: number;
}

export function EventsCard({
  title,
  status,
  venue,
  startTime,
  endTime,
  eventDate,
  price,
}: eventCardType) {
  return (
    <Card className="overflow-hidden rounded-xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex h-32 items-center justify-center bg-gradient-to-r from-indigo-600 to-violet-600">
        {status === "upcoming" ? (
          <Badge className="absolute left-3 top-3 bg-green-500">
            Upcoming
          </Badge>
        ) : status === "ongoing" ? (
          <Badge className="absolute left-3 top-3 bg-yellow-500 text-black">
            Ongoing
          </Badge>
        ) : (
          <Badge className="absolute left-3 top-3 bg-red-500">
            Completed
          </Badge>
        )}

        <h2 className="px-4 text-center text-xl font-bold text-white">
          {title}
        </h2>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>

        <p className="text-sm text-slate-500">
          Join this exciting event.
        </p>
      </CardHeader>

      <CardContent className="space-y-4 text-sm">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-4 w-4 text-indigo-600" />

          <div>
            <p className="text-xs text-slate-500">Date</p>
            <p>{eventDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock4 className="h-4 w-4 text-indigo-600" />

          <div>
            <p className="text-xs text-slate-500">Time</p>
            <p>
              {startTime} - {endTime}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-indigo-600" />

          <div>
            <p className="text-xs text-slate-500">Venue</p>
            <p>{venue}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div>
          <p className="text-xs text-slate-500">Price</p>

          <p className="text-lg font-semibold text-indigo-600">
            Rs. {price}
          </p>
        </div>

        <Button size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
}