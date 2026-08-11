import Link from "next/link";

export default function Navlink() {
  return (
    <div className="flex flex-1 justify-end">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-amber-500"
        >
          Home
        </Link>

        <Link
          href="/events"
          className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-amber-500"
        >
          Events
        </Link>

        <Link
          href="/register"
          className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-amber-500"
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-amber-500"
        >
          Login
        </Link>
      </div>
    </div>
  );
}