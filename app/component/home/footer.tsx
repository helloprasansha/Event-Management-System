import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto grid gap-10 px-6 py-14 md:grid-cols-4">
        
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">
            EventPulse
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Discover and book amazing events with ease.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-2 text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Categories</h3>

          <div className="mt-4 flex flex-col gap-2 text-gray-600">
            <p>Music</p>
            <p>Technology</p>
            <p>Sports</p>
            <p>Workshops</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Follow Us</h3>

          <div className="mt-4 flex gap-4 text-xl">
  <FaFacebookF className="cursor-pointer hover:text-indigo-600" />
  <FaInstagram className="cursor-pointer hover:text-indigo-600" />
  <FaLinkedinIn className="cursor-pointer hover:text-indigo-600" />
  <FaTwitter className="cursor-pointer hover:text-indigo-600" />
</div>
        </div>
      </div>

      <div className="border-t py-5 text-center text-sm text-gray-500">
        © 2026 EventPulse. All rights reserved.
      </div>
    </footer>
  );
}