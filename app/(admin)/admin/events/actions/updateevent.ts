"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";
import { db } from "@/db";
import { events } from "@/db/schema";
import { eventSchema } from "@/lib/validation/event";

type UpdateEventFormState = {
  errors: {
    title?: string[];
    description?: string[];
    venue?: string[];
    event_Date?: string[];
    Start_Time?: string[];
    End_Time?: string[];
    capacity?: string[];
    price?: string[];
    status?: string[];
  };
};

export async function updateEvent(
  id: string,
  _previousState: UpdateEventFormState,
  formData: FormData
): Promise<UpdateEventFormState> {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user.role !== "admin") {
    return { errors: { title: ["Only administrators can update events."] } };
  }

  const parsed = eventSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    venue: formData.get("venue"),
    event_Date: formData.get("eventDate"),
    Start_Time: formData.get("startTime"),
    End_Time: formData.get("endTime"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const banner = formData.get("banner")?.toString() || null;

  try {
    await db
      .update(events)
      .set({ ...parsed.data, banner, Updated_At: new Date() })
      .where(eq(events.id, id));
  } catch (error) {
    console.error("Database Error:", error);
    return { errors: { title: ["Something went wrong while updating the event."] } };
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/events/event-details");
  redirect("/admin/events/event-details");
}
