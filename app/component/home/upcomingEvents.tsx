export default function UpcomingEvents() {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="mt-2 text-gray-500">
            Don't miss these exciting upcoming events.
          </p>
        </div>
  
        <div className="grid gap-8 lg:grid-cols-3">
  
          {/* Card 1 */}
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="h-56 bg-gray-300"></div>
  
            <div className="p-5">
              <h3 className="text-xl font-semibold">AI Summit 2026</h3>
  
              <p className="mt-3 text-sm text-gray-500">
                📅 20 August 2026
              </p>
  
              <p className="mt-2 text-sm text-gray-500">
                📍 Kathmandu
              </p>
  
              <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white">
                Register Now
              </button>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="h-56 bg-gray-300"></div>
  
            <div className="p-5">
              <h3 className="text-xl font-semibold">Music Night</h3>
  
              <p className="mt-3 text-sm text-gray-500">
                📅 25 August 2026
              </p>
  
              <p className="mt-2 text-sm text-gray-500">
                📍 Pokhara
              </p>
  
              <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white">
                Register Now
              </button>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="h-56 bg-gray-300"></div>
  
            <div className="p-5">
              <h3 className="text-xl font-semibold">Startup Meetup</h3>
  
              <p className="mt-3 text-sm text-gray-500">
                📅 5 September 2026
              </p>
  
              <p className="mt-2 text-sm text-gray-500">
                📍 Itahari
              </p>
  
              <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white">
                Register Now
              </button>
            </div>
          </div>
  
        </div>
      </section>
    );
  }