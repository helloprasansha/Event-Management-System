import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
    <Card
      className="relative mx-auto w-full max-w-sm overflow-hidden border-stone-200 bg-white pt-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {status === "upcoming" ? (
  <Badge className="absolute left-3 top-3 z-10 bg-red-100 text-red-700 hover:bg-red-100">
    {status}
  </Badge>
) : status === "ongoing" ? (
  <Badge className="absolute left-3 top-3 z-10 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
    {status}
  </Badge>
) : (
  <Badge className="absolute left-3 top-3 z-10 bg-green-100 text-green-700 hover:bg-green-100">
    {status}
  </Badge>
)}

      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="aspect-video w-full object-cover"
      />

      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-stone-900">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 text-sm text-stone-500">

        <div className="flex items-center gap-3">
          <CalendarDays className="h-4 w-4 shrink-0 text-stone-600" />
          <span>{eventDate}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock4 className="h-4 w-4 shrink-0 text-stone-600" />
          <span>
            {startTime} - {endTime}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 shrink-0 text-stone-600" />
          <span>{venue}</span>
        </div>

      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-stone-100 pt-4">
        <span className="font-semibold text-stone-800">
          Rs. {price}
        </span>

        <Link
          href={`/events/${id}`}
          className="rounded-lg bg-stone-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}