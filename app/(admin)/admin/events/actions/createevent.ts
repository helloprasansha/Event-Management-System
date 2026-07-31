"use server";

import { db } from "@/db";
import { event } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const venue = formData.get("venue")?.toString().trim();
  const eventDate = formData.get("eventDate")?.toString();
  const startTime = formData.get("startTime")?.toString();
  const endTime = formData.get("endTime")?.toString();
  const capacity = Number(formData.get("capacity"));
  const price = Number(formData.get("price"));
  const banner = formData.get("banner")?.toString() || "";

  if (
    !title ||
    !description ||
    !venue ||
    !eventDate ||
    !startTime ||
    !endTime
  ) {
    throw new Error("All required fields must be filled.");
  }

  try {
    await db.insert(event).values({
      id: crypto.randomUUID(),
      title,
      description,
      venue,
      event_Date: eventDate,
      Start_Time: startTime,
      End_Time: endTime,
      capacity,
      price,
      banner,
      status: "upcoming",
      Created_At: new Date(),
      Updated_At: new Date(),
    });

    revalidatePath("/admin/dashboard");
    redirect("/admin/dashboard");
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }
}