"use client";

import Link from "next/link";
import { Menu, Ticket } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Navlink from "./navlink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:opacity-80"
        >
          <Ticket className="h-7 w-7 text-amber-500" />
          <span className="text-xl font-bold tracking-wide text-slate-800">
            EMS
          </span>
        </Link>

        <div className="hidden sm:flex flex-1">
          <Navlink />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="rounded-md p-2 transition hover:bg-slate-100 sm:hidden">
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <div className="mt-10 flex flex-col space-y-4">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-500"
                >
                  Home
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/events"
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-500"
                >
                  Events
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/register"
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-500"
                >
                  Sign Up
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/login"
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-500"
                >
                  Login
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}