"use server";
import { db } from '@/db';
import { events } from '@/db/schema/event-schema';
import { eq } from 'drizzle-orm';
import React from 'react';

export type eventType = typeof events.$inferSelect;

export default async function GetAllEvents(eventDate?: string) {
  try {
    const query = db.select().from(events);
    const eventData = eventDate
      ? await query.where(eq(events.event_Date, eventDate))
      : await query;

    return { success: true, data: eventData };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to fetch events' };
  }
}
