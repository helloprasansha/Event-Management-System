"use client";

import Link from "next/link";
import { Menu, Ticket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navlink from "./navlink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-700">
            <Ticket className="h-5 w-5 text-stone-50" />
          </div>

          <span className="text-xl font-semibold tracking-tight text-stone-800">
            EMS
          </span>
        </Link>

        <div className="hidden sm:block">
          <Navlink />
        </div>

        <Sheet>
          <SheetTrigger className="rounded-lg p-2 text-stone-800 transition hover:bg-stone-100 sm:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[280px] border-stone-200 bg-stone-50"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-700">
                  <Ticket className="h-4 w-4 text-stone-50" />
                </div>

                <span className="text-lg font-semibold text-stone-800">
                  EMS
                </span>
              </SheetTitle>

              <SheetDescription className="text-left text-stone-500">
                Discover and register for amazing events.
              </SheetDescription>
            </SheetHeader>

            <div className="mt-8 flex flex-col gap-2">
              <Link
                href="/"
                className="rounded-lg px-4 py-3 font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-800"
              >
                Home
              </Link>

              <Link
                href="/events"
                className="rounded-lg px-4 py-3 font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-800"
              >
                Events
              </Link>

              <Link
                href="/register"
                className="mt-2 rounded-lg bg-stone-700 px-4 py-3 text-center font-medium text-stone-50 transition hover:bg-stone-800"
              >
                Sign Up
              </Link>

              <Link
                href="/login"
                className="rounded-lg border border-stone-200 px-4 py-3 text-center font-medium text-stone-600 transition hover:bg-stone-100"
              >
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}