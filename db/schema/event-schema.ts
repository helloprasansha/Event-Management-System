import { date, integer, pgEnum, text, time, timestamp, uuid, varchar } from "drizzle-orm/pg-core/columns";
import { pgTable, unique } from "drizzle-orm/pg-core";

// ---------- ENUMS ----------
export const eventStatusEnum = pgEnum("event_status", ["upcoming", "ongoing", "completed"]);
export const attendanceStatusEnum = pgEnum("attendance_status", ["present", "absent"]);
export const paymentMethodEnum = pgEnum("payment_method", ["esewa", "khalti", "card", "cash"]);
export const paymentStatusEnum = pgEnum("payment_status", ["completed", "failed", "pending"]);

// ---------- EVENT ----------
export const event = pgTable("event", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title").notNull(),
  description: text("description").notNull(),
  venue: varchar("venue").notNull(),
  eventDate: date("event_date").notNull(),
  startTime: time("start_time").notNull(),
  endTime: time("end_time").notNull(),
  capacity: integer("capacity").notNull(),
  price: integer("price").notNull().default(0),
  banner: varchar("banner"),
  status: eventStatusEnum("status").default("upcoming"),
  createdBy: varchar("created_by"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ---------- REGISTRATIONS ----------
export const registrations = pgTable("registrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id").notNull(),
  eventId: uuid("event_id")
    .references(() => event.id, { onDelete: "cascade" })
    .notNull(),
  ticketNumber: varchar("ticket_number").notNull().unique(),
  qrCode: varchar("qr_code"),
  registeredAt: timestamp("registered_at").defaultNow(),
});

// ---------- ATTENDANCE ----------
export const attendance = pgTable("attendance", {
  id: uuid("id").primaryKey().defaultRandom(),
  registrationId: uuid("registration_id")
    .references(() => registrations.id, { onDelete: "cascade" })
    .notNull(),
  checkedInAt: timestamp("checked_in_at").defaultNow(),
  status: attendanceStatusEnum("status").default("absent"),
});

// ---------- CATEGORIES ----------
export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull().unique(),
});

// ---------- EVENT_CATEGORIES (join table) ----------
export const eventCategories = pgTable(
  "event_categories",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    eventId: uuid("event_id")
      .references(() => event.id, { onDelete: "cascade" })
      .notNull(),
    categoryId: uuid("category_id")
      .references(() => categories.id, { onDelete: "cascade" })
      .notNull(),
  },
  (table) => ({
    eventCategoryUnique: unique().on(table.eventId, table.categoryId),
  })
);

// ---------- PAYMENTS ----------
export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  registrationId: uuid("registration_id")
    .references(() => registrations.id, { onDelete: "cascade" })
    .notNull(),
  amount: integer("amount").notNull(),
  paymentMethod: paymentMethodEnum("payment_method").default("card"),
  paymentStatus: paymentStatusEnum("payment_status").default("pending"),
  transactionId: varchar("transaction_id"),
  paidAt: timestamp("paid_at").defaultNow(),
});
