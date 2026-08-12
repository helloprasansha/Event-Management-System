import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCopyright,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="container mx-auto grid gap-10 px-6 py-14 md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold text-stone-700">
            EventPulse
          </h2>

          <p className="mt-4 text-sm leading-6 text-stone-500">
            Discover and book amazing events with ease.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-stone-900">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              Home
            </Link>

            <Link href="/events" className="hover:text-stone-800">
              Events
            </Link>

            <Link href="/about" className="hover:text-stone-800">
              About
            </Link>

            <Link href="/contact" className="hover:text-stone-800">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-stone-900">
            Categories
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-stone-500">
            <p>Music</p>
            <p>Technology</p>
            <p>Sports</p>
            <p>Workshops</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-stone-900">
            Follow Us
          </h3>

          <div className="mt-4 flex gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 transition hover:bg-stone-800 hover:text-white">
              <FaFacebookF />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 transition hover:bg-stone-800 hover:text-white">
              <FaInstagram />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 transition hover:bg-stone-800 hover:text-white">
              <FaLinkedinIn />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 transition hover:bg-stone-800 hover:text-white">
              <FaTwitter />
            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-center gap-1 border-t border-stone-200 py-5 text-sm text-stone-500">
        <FaCopyright className="text-xs" />
        <span>2026 EventPulse. All rights reserved.</span>
      </div>
    </footer>
  );
}