"use server";
import { db } from '@/db';
import { events } from '@/db/schema/event-schema';
import React from 'react'

export type eventType = typeof events.$inferSelect;

export default async function GetAllEvents() {
  try {
    const eventData= await db.select().from(events);

return {success: true, data: eventData};

  } catch (error) {
    console.error(error);
    return {success: false, message: "Failed to fetch events"};
  }
}
