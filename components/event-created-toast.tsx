"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export function EventCreatedToast() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("event") !== "created") {
      return;
    }

    toast.success("Event created successfully.");
    router.replace("/admin/dashboard");
  }, [router, searchParams]);

  return null;
}
