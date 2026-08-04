import { auth } from "@/lib/auth";
import { db } from "@/db";
import { events, user } from "@/db/schema";
import { eq } from "drizzle-orm";

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set.");
}

const [existingUser] = await db
  .select({ id: user.id })
  .from(user)
  .where(eq(user.email, email.toLowerCase()));

if (existingUser) {
  await db
    .update(user)
    .set({ role: "admin", updatedAt: new Date() })
    .where(eq(user.id, existingUser.id));
  console.log("Existing admin account role verified.");
} else {
  await auth.api.createUser({
    body: {
      email,
      password,
      name: "Admin",
      role: "admin",
    },
  });
  console.log("Admin account created.");
}

const sampleEvents = [
  {
    title: "Summer Startup Summit",
    description:
      "A one-day conference connecting entrepreneurs, investors, and mentors with hands-on workshops and networking.",
    venue: "Downtown Conference Center",
    event_Date: "2026-09-12",
    Start_Time: "09:00:00",
    End_Time: "17:00:00",
    capacity: 250,
    price: 30,
    banner:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    title: "Creative Coding Workshop",
    description:
      "Hands-on workshop for designers and developers to build interactive web experiences using modern tools.",
    venue: "Innovation Lab",
    event_Date: "2026-10-05",
    Start_Time: "13:00:00",
    End_Time: "16:00:00",
    capacity: 80,
    price: 15,
    banner:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    title: "Community Charity Gala",
    description:
      "A fundraising gala to support local nonprofits, featuring dinner, live music, and silent auction items.",
    venue: "Grand Ballroom",
    event_Date: "2026-11-18",
    Start_Time: "18:30:00",
    End_Time: "22:00:00",
    capacity: 300,
    price: 75,
    banner:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
] as const;

const now = new Date();
let insertedCount = 0;

for (const sample of sampleEvents) {
  const [existing] = await db
    .select({ id: events.id })
    .from(events)
    .where(eq(events.title, sample.title));

  if (!existing) {
    await db.insert(events).values({
      title: sample.title,
      description: sample.description,
      venue: sample.venue,
      event_Date: sample.event_Date,
      Start_Time: sample.Start_Time,
      End_Time: sample.End_Time,
      capacity: sample.capacity,
      price: sample.price,
      banner: sample.banner,
      status: sample.status,
      createdBy: "admin",
      Created_At: now,
      Updated_At: now,
    });
    insertedCount += 1;
  }
}

if (insertedCount > 0) {
  console.log(`Inserted ${insertedCount} dummy event(s).`);
} else {
  console.log("Dummy events already exist. No new events were inserted.");
}
