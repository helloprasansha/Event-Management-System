import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

const authTimestamp = (name: string) => timestamp(name, { withTimezone: true });

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  createdAt: authTimestamp("createdAt").defaultNow().notNull(),
  updatedAt: authTimestamp("updatedAt").defaultNow().notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: authTimestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: authTimestamp("createdAt").defaultNow().notNull(),
  updatedAt: authTimestamp("updatedAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: authTimestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: authTimestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: authTimestamp("createdAt").defaultNow().notNull(),
  updatedAt: authTimestamp("updatedAt").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: authTimestamp("expiresAt").notNull(),
  createdAt: authTimestamp("createdAt").defaultNow().notNull(),
  updatedAt: authTimestamp("updatedAt").defaultNow().notNull(),
});
