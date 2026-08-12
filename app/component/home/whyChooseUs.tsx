import {
  FaTicket,
  FaLock,
  FaLocationDot,
} from "react-icons/fa6";

export default function WhyChooseUs() {
  return (
    <section className="bg-stone-50">
      <div className="container mx-auto px-6 py-16">

        <div className="text-center">
          <p className="text-sm font-medium text-stone-500">
            Why EventPulse
          </p>

          <h2 className="mt-2 text-3xl font-bold text-stone-900">
            Everything You Need in One Place
          </h2>

          <p className="mt-3 text-stone-500">
            Simple, reliable, and convenient event management for everyone.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
              <FaTicket className="text-2xl text-stone-600" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-stone-900">
              Easy Booking
            </h3>

            <p className="mt-3 leading-6 text-stone-500">
              Register for your favorite events in just a few simple clicks.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
              <FaLock className="text-2xl text-stone-600" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-stone-900">
              Secure Payments
            </h3>

            <p className="mt-3 leading-6 text-stone-500">
              Enjoy a safe and reliable payment experience for every booking.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
              <FaLocationDot className="text-2xl text-stone-600" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-stone-900">
              Discover Events
            </h3>

            <p className="mt-3 leading-6 text-stone-500">
              Explore concerts, workshops, conferences, sports, and more.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}