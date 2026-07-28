import { date, integer, pgEnum, text, time, timestamp, uuid, varchar } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";

export const statusEnum = pgEnum("status", ["upcoming", "ongoing", "completed"])
export const event = pgTable("event", {
    id: uuid("id").primaryKey(),
    title: varchar("title").notNull(),
    description: text("description").notNull(),
    venue: varchar("venue").notNull(),
    eventDate: date("event_date").notNull(),
    startTime: time("start_time").notNull(),
    endTime: time("end_time").notNull(),
    capacity: integer("capacity").notNull(),
    price: integer("price").notNull().default(0),
    banner: varchar("banner"),
    status: statusEnum("status").default("upcoming"),
    createdBy: varchar("created_by"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),

})

export const paymentStatusEnum = pgEnum("paymentStatus", ["paid", "unpaid", "failed"])
export const registrationsTable = pgTable("registrations",{
    id: uuid("id"),
    userId: varchar("user_id"),
    eventId: uuid("event_id").references(() => event.id),
    ticketNumber: varchar("ticket_number").unique(),
    qrCode: varchar("qr_code"),
    paymentStatus: paymentStatusEnum("payment_status").default("unpaid"),
    registeredAt: timestamp("registered_at").defaultNow(),
})


