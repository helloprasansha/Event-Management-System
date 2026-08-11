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
    <section className="container mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Browse by Category</h2>

        <p className="mt-2 text-gray-500">
          Find events based on your interests.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaMusic className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Music
          </h3>
        </div>

        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaLaptopCode className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Technology
          </h3>
        </div>

        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaPalette className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Art
          </h3>
        </div>

        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaFutbol className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Sports
          </h3>
        </div>

        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaUtensils className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Food
          </h3>
        </div>

        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaBookOpen className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Education
          </h3>
        </div>

        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaGamepad className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Gaming
          </h3>
        </div>

        <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <FaBriefcase className="mx-auto text-4xl text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Business
          </h3>
        </div>
      </div>
    </section>
  );
}