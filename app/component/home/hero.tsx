
export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        <div>
          <p className="mb-3 text-indigo-600 font-semibold">
            Discover Amazing Events
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Find Your Next
            <span className="text-indigo-600"> Experience</span>
          </h1>

          <p className="mt-6 text-gray-600">
            Explore concerts, workshops, conferences, sports events,
            and much more. Book your seat in just a few clicks.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
              Browse Events
            </button>

            <button className="rounded-lg border px-6 py-3 hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}