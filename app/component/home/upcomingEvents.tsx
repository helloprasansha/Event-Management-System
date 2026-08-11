import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";

export default function UpcomingEvents() {

  
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>

        <p className="mt-2 text-gray-500">
          Don't miss these exciting upcoming events.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="h-48 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-500" />

          <div className="p-5">
            <h3 className="text-xl font-semibold">
              AI Summit 2026
            </h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <FaCalendarDays className="text-indigo-600" />
              <span>20 August 2026</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <FaLocationDot className="text-indigo-600" />
              <span>Kathmandu</span>
            </div>

            <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
              Register Now
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="h-48 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-600" />

          <div className="p-5">
            <h3 className="text-xl font-semibold">
              Music Night
            </h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <FaCalendarDays className="text-indigo-600" />
              <span>25 August 2026</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <FaLocationDot className="text-indigo-600" />
              <span>Pokhara</span>
            </div>

            <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
              Register Now
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="h-48 bg-linear-to-r from-blue-500 via-cyan-500 to-indigo-600" />

          <div className="p-5">
            <h3 className="text-xl font-semibold">
              Startup Meetup
            </h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <FaCalendarDays className="text-indigo-600" />
              <span>5 September 2026</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <FaLocationDot className="text-indigo-600" />
              <span>Itahari</span>
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