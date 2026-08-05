CREATE TYPE "public"."bookingStatus" AS ENUM('pending', 'confirmed', 'cancelled');--> statement-breakpoint
CREATE TABLE "booking" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar,
	"event_id" uuid,
	"ticket_number" varchar,
	"paymentStatus" "paymentStatus" DEFAULT 'unpaid',
	"registered_at" timestamp DEFAULT now(),
	"quantity" integer DEFAULT 1,
	"total_amount" integer DEFAULT 0,
	"booking_status" "bookingStatus" DEFAULT 'pending',
	CONSTRAINT "booking_ticket_number_unique" UNIQUE("ticket_number")
);
--> statement-breakpoint
ALTER TABLE "event" ADD COLUMN "booking_expired_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "booking" ADD CONSTRAINT "booking_event_id_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."event"("id") ON DELETE no action ON UPDATE no action;