"use server";

import { db } from "@/db";
import { events } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eventSchema } from "@/lib/validation/event";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type FormState = {
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

export type CreateEventFormState = FormState;

export async function createEvent(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== "admin") {
    return {
      errors: {
        title: ["Only administrators can create events."],
      },
    };
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
    status: "upcoming",
  });

  // Validation failed
  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const banner = formData.get("banner")?.toString() || null;

  try {
    await db.insert(events).values({
      id: crypto.randomUUID(),
      ...parsed.data,
      banner,
      createdBy: "admin",
      Created_At: new Date(),
      Updated_At: new Date(),
    });

    revalidatePath("/admin/dashboard");
  } catch (error) {
    console.error("Database Error:", error);

    return {
      errors: {
        title: ["Something went wrong while creating the event."],
      },
    };
  }

  redirect("/admin/dashboard?event=created");
}
