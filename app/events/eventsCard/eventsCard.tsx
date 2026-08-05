import Link from "next/link";
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
  id,
  title,
  status,
  venue,
  startTime,
  endTime,
  eventDate,
  price,
}: eventCardType) {
  return (
    <Card className="relative mx-auto w-full max-w-xs pt-0 " key={id}>
      {status === "upcoming" ? (
        <Badge className="absolute top-2 left-2 z-50 bg-green-100 text-green-700"> {status} </Badge>
      ) : status === "ongoing" ? (
        <Badge className="absolute top-2 left-2 z-50 bg-yellow-100 text-yellow-700"> {status}</Badge>
      ) : (
        <Badge className="absolute top-2 left-2 z-50 bg-red-100 text-red-700"> {status} </Badge>
      )}

      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />

      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 ">
        <div className="flex items-center gap-2">
          <span className="font-medium">Event Date</span>
          <CalendarDays className="h-4 w-4" />
          <span>{eventDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">Time</span>
          <Clock4 className="h-4 w-4" />
          <span>
            {startTime} - {endTime}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">Venue</span>
          <MapPin className="h-4 w-4" />
          <span>{venue}</span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span className="font-bold">Rs. {price}</span>

        <Link
          href={`/events/${id}`}
          className="text-primary underline-offset-4 hover:underline"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}