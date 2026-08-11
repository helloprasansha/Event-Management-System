import {
  FaTicket,
  FaLock,
  FaLocationDot,
} from "react-icons/fa6";

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Why Choose EventPulse?
        </h2>

        <p className="mt-2 text-gray-500">
          Everything you need to discover and book amazing events.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <FaTicket className="mx-auto text-5xl text-indigo-600" />

          <h3 className="mt-5 text-xl font-semibold">
            Easy Booking
          </h3>

          <p className="mt-3 text-gray-500">
            Register for your favorite events in just a few clicks.
          </p>
        </div>

        <div className="rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <FaLock className="mx-auto text-5xl text-indigo-600" />

          <h3 className="mt-5 text-xl font-semibold">
            Secure Payments
          </h3>

          <p className="mt-3 text-gray-500">
            Enjoy safe and reliable online payment for every booking.
          </p>
        </div>

        <div className="rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <FaLocationDot className="mx-auto text-5xl text-indigo-600" />

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