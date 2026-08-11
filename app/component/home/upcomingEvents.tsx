import { CalendarDays, MapPin } from "lucide-react";

export default function UpcomingEvents() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Upcoming Events
        </h2>
        <p className="mt-2 text-slate-600">
          Don't miss these exciting upcoming events.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="h-56 bg-slate-300"></div>

          <div className="p-5">
            <h3 className="text-xl font-semibold">AI Summit 2026</h3>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-indigo-600" />
                <span>20 August 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-600" />
                <span>Kathmandu</span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
              Register Now
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="h-56 bg-slate-300"></div>

          <div className="p-5">
            <h3 className="text-xl font-semibold">Music Night</h3>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-indigo-600" />
                <span>25 August 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-600" />
                <span>Pokhara</span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
              Register Now
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="h-56 bg-slate-300"></div>

          <div className="p-5">
            <h3 className="text-xl font-semibold">Startup Meetup</h3>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-indigo-600" />
                <span>5 September 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-600" />
                <span>Itahari</span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
              Register Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}