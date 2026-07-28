CREATE TYPE "attendance_status" AS ENUM('present', 'absent');--> statement-breakpoint
CREATE TYPE "event_status" AS ENUM('upcoming', 'ongoing', 'completed');--> statement-breakpoint
CREATE TYPE "payment_method" AS ENUM('esewa', 'khalti', 'card', 'cash');--> statement-breakpoint
CREATE TYPE "payment_status" AS ENUM('completed', 'failed', 'pending');--> statement-breakpoint
CREATE TABLE "attendance" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"registration_id" uuid NOT NULL,
	"checked_in_at" timestamp DEFAULT now(),
	"status" "attendance_status" DEFAULT 'absent'::"attendance_status"
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL UNIQUE
);
--> statement-breakpoint
CREATE TABLE "event" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"title" varchar NOT NULL,
	"description" text NOT NULL,
	"venue" varchar NOT NULL,
	"event_date" date NOT NULL,
	"start_time" time NOT NULL,
	"end_time" time NOT NULL,
	"capacity" integer NOT NULL,
	"price" integer DEFAULT 0 NOT NULL,
	"banner" varchar,
	"status" "event_status" DEFAULT 'upcoming'::"event_status",
	"created_by" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "event_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"event_id" uuid NOT NULL,
	"category_id" uuid NOT NULL,
	CONSTRAINT "event_categories_event_id_category_id_unique" UNIQUE("event_id","category_id")
);
--> statement-breakpoint
CREATE TABLE "payments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"registration_id" uuid NOT NULL,
	"amount" integer NOT NULL,
	"payment_method" "payment_method" DEFAULT 'card'::"payment_method",
	"payment_status" "payment_status" DEFAULT 'pending'::"payment_status",
	"transaction_id" varchar,
	"paid_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "registrations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" varchar NOT NULL,
	"event_id" uuid NOT NULL,
	"ticket_number" varchar NOT NULL UNIQUE,
	"qr_code" varchar,
	"registered_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_registration_id_registrations_id_fkey" FOREIGN KEY ("registration_id") REFERENCES "registrations"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "event_categories" ADD CONSTRAINT "event_categories_event_id_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "event_categories" ADD CONSTRAINT "event_categories_category_id_categories_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_registration_id_registrations_id_fkey" FOREIGN KEY ("registration_id") REFERENCES "registrations"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "registrations" ADD CONSTRAINT "registrations_event_id_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE CASCADE;