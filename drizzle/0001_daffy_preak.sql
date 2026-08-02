ALTER TABLE "event" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "registrations" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "registrations" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "registrations" ALTER COLUMN "id" SET NOT NULL;