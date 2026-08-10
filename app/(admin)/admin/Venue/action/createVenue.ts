"use server";

import { db } from "@/db";
import { venues } from "@/db/schema";

export async function createVenue(formData: FormData) {
  try {
    const name = formData.get("name")?.toString().trim();
    const location = formData.get("location")?.toString().trim();
    const capacity = Number(formData.get("capacity"));
    const description = formData.get("description")?.toString().trim();

    if (!name || !location || !capacity) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      };
    }

    await db.insert(venues).values({
      name,
      location,
      capacity,
      description: description || null,
    });

    return {
      success: true,
      message: "Venue created successfully.",
    };
  } catch (error) {
    console.error("Create venue error:", error);

    return {
      success: false,
      error: "Failed to create venue.",
    };
  }
}