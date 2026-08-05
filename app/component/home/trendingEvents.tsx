export default function TrendingEvents() {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Trending Events</h2>
            <p className="mt-2 text-gray-500">
              Discover the most popular events happening near you.
            </p>
          </div>
  
          <button className="rounded-lg border px-4 py-2">
            View All
          </button>
        </div>
  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  
          <div className="rounded-2xl border p-4 shadow-sm">
            <div className="h-44 rounded-xl bg-gray-300"></div>
  
            <h3 className="mt-4 text-xl font-semibold">
              Music Festival
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Kathmandu • Aug 20
            </p>
  
            <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white">
              Register
            </button>
          </div>
  
          <div className="rounded-2xl border p-4 shadow-sm">
            <div className="h-44 rounded-xl bg-gray-300"></div>
  
            <h3 className="mt-4 text-xl font-semibold">
              Tech Conference
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Pokhara • Aug 25
            </p>
  
            <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white">
              Register
            </button>
          </div>
  
          <div className="rounded-2xl border p-4 shadow-sm">
            <div className="h-44 rounded-xl bg-gray-300"></div>
  
            <h3 className="mt-4 text-xl font-semibold">
              Art Exhibition
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Lalitpur • Sept 2
            </p>
  
            <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white">
              Register
            </button>
          </div>
  
          <div className="rounded-2xl border p-4 shadow-sm">
            <div className="h-44 rounded-xl bg-gray-300"></div>
  
            <h3 className="mt-4 text-xl font-semibold">
              Startup Meetup
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Itahari • Sept 10
            </p>
  
            <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white">
              Register
            </button>
          </div>
  
        </div>
      </section>
    );
  }