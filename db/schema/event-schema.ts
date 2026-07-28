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

export const registrations = pgTable("registrations",{
    id: uuid("id"),
    userId: varchar("user_id"),
    eventId: uuid("event_id").references(() => event.id),
    ticketNumber: varchar("ticket_number").unique(),
    qrCode: varchar("qr_code"),
    registeredAt: timestamp("registered_at").defaultNow(),
})

export const attendanceStatusEnum = pgEnum("status", ["present", "absent"])
export const attendance = pgTable("attendance", {
    id: uuid ("id"),
    registrationId: uuid("registration_id").references(() => registrations.id),
    checkedInAt: timestamp("checked_in_at").defaultNow(),
    status: attendanceStatusEnum("status").default("absent"),

})

export const categories = pgTable ("categories", {
    id: uuid ("id"),
    name: varchar ("name").unique(),
})

export const event_categories = pgTable ("event_categories", {
    id: uuid("id"),
    eventId: uuid("event_id").references(() => event.id),
    categoriesId: uuid("categories_id").references(() => categories.id),
})

export const paymentMethodEnum = pgEnum("paymentMethod", ["esewa", "khalti", "card", "cash"])
export const paymentStatusEnum = pgEnum("paymentstatus", ["completed", "failed", "pending"])

export const payments = pgTable("payments", {
    id: uuid("id").primaryKey(),
    registrationsId: uuid("registrations_id").references(() => registrations.id),
    amount: integer("amount").notNull(),
    paymentMethod: paymentMethodEnum("payment_method").default("card"),
    paymentStatus: paymentStatusEnum("payment_status").default("pending"),
    transactionId: varchar("transaction_id"),
    paidAt: timestamp("paid_at").defaultNow(),
})

