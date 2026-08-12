import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navlink() {
  return (
    <div className="flex items-center gap-1">
      <Link href="/">
        <Button
          variant="ghost"
          className="rounded-lg px-4 font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-800"
        >
          Home
        </Button>
      </Link>

      <Link href="/events">
        <Button
          variant="ghost"
          className="rounded-lg px-4 font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-800"
        >
          Events
        </Button>
      </Link>

      <Link href="/register">
        <Button className="rounded-lg bg-stone-700 px-5 font-medium text-stone-50 shadow-sm transition hover:bg-stone-800">
          Sign Up
        </Button>
      </Link>

      <Link href="/login">
        <Button
          variant="ghost"
          className="rounded-lg px-4 font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-800"
        >
          Login
        </Button>
      </Link>
    </div>
  );
}