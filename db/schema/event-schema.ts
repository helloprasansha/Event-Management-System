import { date, integer, pgEnum, text, time, timestamp, uuid, varchar } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";

export const statusEnum = pgEnum("status", ["upcoming", "ongoing", "completed"])
export const events = pgTable("event", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title").notNull(),
    description: text("description").notNull(),
    venue: varchar("venue").notNull(),
    event_Date: date("event_date").notNull(),
    Start_Time: time("start_time").notNull(),
    End_Time: time("end_time").notNull(),
    capacity: integer("capacity").notNull(),
    price: integer("price").notNull().default(0),
    banner: varchar("banner"),
    status: statusEnum("status").default("upcoming"),
    createdBy: varchar("created_by"),
    Created_At: timestamp("created_at").defaultNow(),
    Updated_At: timestamp("updated_at").defaultNow(),
    Booking_ExpiredAt : timestamp("booking_expired_at").defaultNow(),

})

export const paymentStatusEnum = pgEnum("paymentStatus", ["paid", "unpaid", "failed"])
export const registrationsTable = pgTable("registrations",{
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id"),
    eventId: uuid("event_id").references(() => events.id),
    ticketNumber: varchar("ticket_number").unique(),
    qrCode: varchar("qr_code"),
    paymentStatus: paymentStatusEnum("paymentStatus").default("unpaid"),
    registeredAt: timestamp("registered_at").defaultNow(),
})

export const bookingStatusEnum = pgEnum("bookingStatus", ["pending", "confirmed", "cancelled"])

export const BookingTable = pgTable("booking", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id"),
    eventId: uuid("event_id").references(() => events.id),
    ticketNumber: varchar("ticket_number").unique(),
    paymentStatus: paymentStatusEnum("paymentStatus").default("unpaid"),
    registeredAt: timestamp("registered_at").defaultNow(),
    quantity: integer("quantity").default(1),
    totalAmount: integer("total_amount").default(0),
    bookingStatus: bookingStatusEnum("booking_status").default("pending"),
})

