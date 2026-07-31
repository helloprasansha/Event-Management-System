import { createEvent } from "@/app/(admin)/admin/events/create/action";
import Link from "next/link";

const EventCreate = () => {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="rounded-xl border bg-background shadow-sm">
        <div className="border-b px-6 py-5">
          <h1 className="text-2xl font-bold">Create Event</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the event details below.
          </p>  
        </div>

        <form action={createEvent} className="space-y-6 p-6">
          <div className="grid gap-6 md:grid-cols-2">

            {/* Event Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Event Title</label>
              <input
                name="title"
                type="text"
                placeholder="Tech Conference 2026"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

            {/* Venue */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Venue</label>
              <input
                name="venue"
                type="text"
                placeholder="Kathmandu Convention Center"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

            {/* Event Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Event Date</label>
              <input
                name="eventDate"
                type="date"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

            {/* Capacity */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Capacity</label>
              <input
                name="capacity"
                type="number"
                placeholder="500"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

            {/* Start Time */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Start Time</label>
              <input
                name="startTime"
                type="time"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

            {/* End Time */}
            <div className="space-y-2">
              <label className="text-sm font-medium">End Time</label>
              <input
                name="endTime"
                type="time"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

            {/* Ticket Price */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Ticket Price ($)</label>
              <input
                name="price"
                type="number"
                placeholder="25"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

            {/* Banner */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Banner Image URL</label>
              <input
                name="banner"
                type="text"
                placeholder="https://example.com/banner.jpg"
                className="w-full rounded-lg border bg-background px-3 py-2"
              />
            </div>

          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              rows={5}
              placeholder="Write a detailed description of the event..."
              className="w-full rounded-lg border bg-background px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Link
              href="/admin/dashboard"
              className="rounded-lg border px-5 py-2 font-medium hover:bg-muted"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-lg bg-primary px-5 py-2 font-medium text-primary-foreground hover:opacity-90"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreate;