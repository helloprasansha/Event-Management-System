import Link from "next/link";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="container mx-auto px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-stone-600">
              <FaCalendarDays className="h-4 w-4" />
              <span>Discover Amazing Events</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Find Your Next
              <span className="block text-stone-600">
                Unforgettable Experience
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
              Explore concerts, workshops, conferences, sports events, and
              much more. Find something you love and book your seat in just a
              few clicks.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-700 px-6 py-3 font-medium text-stone-50 shadow-sm transition hover:bg-stone-800"
              >
                Browse Events
                <FaArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3 font-medium text-stone-700 transition hover:bg-stone-100"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-3 shadow-sm">
              <img
                src="/images/image1.jpg"
                alt="People attending an event"
                className="aspect-4/3 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-sm sm:block">
              <p className="text-xs text-stone-500">
                Upcoming Events
              </p>

              <p className="mt-1 text-lg font-semibold text-stone-800">
                Discover. Book. Experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}