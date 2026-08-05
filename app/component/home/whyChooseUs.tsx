export default function WhyChooseUs() {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Why Choose EventPulse?</h2>
          <p className="mt-2 text-gray-500">
            Everything you need to discover and book amazing events.
          </p>
        </div>
  
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  
          <div className="rounded-2xl border p-8 text-center shadow-sm">
            <div className="text-5xl">🎟️</div>
            <h3 className="mt-5 text-xl font-semibold">
              Easy Booking
            </h3>
            <p className="mt-3 text-gray-500">
              Register for your favorite events in just a few clicks.
            </p>
          </div>
  
          <div className="rounded-2xl border p-8 text-center shadow-sm">
            <div className="text-5xl">🔒</div>
            <h3 className="mt-5 text-xl font-semibold">
              Secure Payments
            </h3>
            <p className="mt-3 text-gray-500">
              Enjoy safe and reliable online payment for every booking.
            </p>
          </div>
  
          <div className="rounded-2xl border p-8 text-center shadow-sm">
            <div className="text-5xl">📍</div>
            <h3 className="mt-5 text-xl font-semibold">
              Discover Events
            </h3>
            <p className="mt-3 text-gray-500">
              Explore concerts, workshops, conferences, sports, and more.
            </p>
          </div>
  
        </div>
      </section>
    );
  }