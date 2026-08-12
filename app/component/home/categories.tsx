import {
  FaMusic,
  FaLaptopCode,
  FaPalette,
  FaFutbol,
  FaUtensils,
  FaBookOpen,
  FaGamepad,
  FaBriefcase,
} from "react-icons/fa6";

export default function Categories() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16">

        <div className="text-center">
          <p className="text-sm font-medium text-stone-500">
            Explore Events
          </p>

          <h2 className="mt-2 text-3xl font-bold text-stone-900">
            Browse by Category
          </h2>

          <p className="mt-3 text-stone-500">
            Find events based on what you love.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaMusic className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Music
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Concerts & festivals
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaLaptopCode className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Technology
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Tech & innovation
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaPalette className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Art
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Exhibitions & workshops
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaFutbol className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Sports
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Matches & activities
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaUtensils className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Food
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Food & dining events
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaBookOpen className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Education
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Courses & workshops
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaGamepad className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Gaming
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Games & competitions
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
            <FaBriefcase className="mx-auto text-3xl text-stone-600" />
            <h3 className="mt-4 font-semibold text-stone-900">
              Business
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Meetups & networking
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}