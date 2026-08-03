"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";
import { db } from "@/db";
import { events } from "@/db/schema";

export async function deleteEvent(formData: FormData): Promise<void> {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user.role !== "admin") {
    redirect("/admin/events/event-details");
    return;
  }

  const id = formData.get("id")?.toString();
  if (!id) {
    redirect("/admin/events/event-details");
    return;
  }

  try {
    await db.delete(events).where(eq(events.id, id));
  } catch (error) {
    console.error("Database Error:", error);
  }

  revalidatePath("/admin/events/event-details");
  redirect("/admin/events/event-details");
}
