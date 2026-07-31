"use client";

import Link from "next/link";
import { Menu, Ticket } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="border-b bg-[#1E1B4B]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Ticket className="h-6 w-6 text-amber-400" />
          <span className="text-lg font-semibold text-white">EMS</span>
        </Link>

        <Sheet >
  <SheetTrigger className="sm:hidden"> <Menu color="#fbf9f9" /> </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </nav>
    </header>
  );
}