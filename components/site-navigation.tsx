"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/app/component/navbar";

export function SiteNavigation() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return <Navbar />;
}
