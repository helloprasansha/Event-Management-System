"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEvent, type CreateEventFormState } from "@/app/(admin)/admin/events/actions/createevent";
import {
  eventFormSchema,
  type EventFormSchema,
} from "@/lib/validation/event";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const initialState: CreateEventFormState = { errors: {} };

const serverFieldMap: Partial<
  Record<keyof CreateEventFormState["errors"], keyof EventFormSchema>
> = {
  title: "title",
  description: "description",
  venue: "venue",
  event_Date: "eventDate",
  Start_Time: "startTime",
  End_Time: "endTime",
  capacity: "capacity",
  price: "price",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="text-sm text-destructive">{message}</p>;
}

const EventCreate = () => {
  const [state, formAction, pending] = useActionState(createEvent, initialState);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<
    EventFormSchema,
    unknown,
    EventFormSchema
  >({
    resolver: zodResolver(eventFormSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      description: "",
      venue: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      capacity: Number.NaN,
      price: Number.NaN,
      banner: "",
    },
  });

  useEffect(() => {
    for (const [serverKey, messages] of Object.entries(state.errors)) {
      const formKey =
        serverFieldMap[serverKey as keyof typeof serverFieldMap];

      if (formKey && messages?.[0]) {
        setError(formKey, { message: messages[0] });
      }
    }
  }, [state.errors, setError]);

  const onSubmit = (data: EventFormSchema) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("venue", data.venue);
    formData.append("eventDate", data.eventDate);
    formData.append("startTime", data.startTime);
    formData.append("endTime", data.endTime);
    formData.append("capacity", String(data.capacity));
    formData.append("price", String(data.price));

    if (data.banner) {
      formData.append("banner", data.banner);
    }

    formAction(formData);
  };

  const inputClassName = (hasError: boolean) =>
    cn(
      "w-full rounded-lg border bg-background px-3 py-2",
      hasError && "border-destructive ring-destructive/20"
    );

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="rounded-xl border bg-background shadow-sm">
        <div className="border-b px-6 py-5">
          <h1 className="text-2xl font-bold">Create Event</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the event details below.
          </p>
        </div> 

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 p-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Tech Conference 2026"
                aria-invalid={!!errors.title}
                className={inputClassName(!!errors.title)}
                {...register("title")}
              />
              <FieldError message={errors.title?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="venue">Venue</Label>
              <Input
                id="venue"
                type="text"
                placeholder="Kathmandu Convention Center"
                aria-invalid={!!errors.venue}
                className={inputClassName(!!errors.venue)}
                {...register("venue")}
              />
              <FieldError message={errors.venue?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate">Event Date</Label>
              <Input
                id="eventDate"
                type="date"
                aria-invalid={!!errors.eventDate}
                className={inputClassName(!!errors.eventDate)}
                {...register("eventDate")}
              />
              <FieldError message={errors.eventDate?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="capacity">Capacity</Label>
              <Input
                id="capacity"
                type="number"
                placeholder="500"
                aria-invalid={!!errors.capacity}
                className={inputClassName(!!errors.capacity)}
                {...register("capacity", { valueAsNumber: true })}
              />
              <FieldError message={errors.capacity?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="time"
                aria-invalid={!!errors.startTime}
                className={inputClassName(!!errors.startTime)}
                {...register("startTime")}
              />
              <FieldError message={errors.startTime?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                type="time"
                aria-invalid={!!errors.endTime}
                className={inputClassName(!!errors.endTime)}
                {...register("endTime")}
              />
              <FieldError message={errors.endTime?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Ticket Price ($)</Label>
              <Input
                id="price"
                type="number"
                placeholder="25"
                aria-invalid={!!errors.price}
                className={inputClassName(!!errors.price)}
                {...register("price", { valueAsNumber: true })}
              />
              <FieldError message={errors.price?.message} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="banner">Banner Image URL</Label>
              <Input
                id="banner"
                type="text"
                placeholder="https://example.com/banner.jpg"
                aria-invalid={!!errors.banner}
                className={inputClassName(!!errors.banner)}
                {...register("banner")}
              />
              <FieldError message={errors.banner?.message} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              rows={5}
              placeholder="Write a detailed description of the event..."
              aria-invalid={!!errors.description}
              className={inputClassName(!!errors.description)}
              {...register("description")}
            />
            <FieldError message={errors.description?.message} />
          </div>

          <div className="flex justify-end gap-3">
            <Link
              href="/admin/dashboard"
              className="rounded-lg border px-5 py-2 font-medium hover:bg-muted"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={pending}
              className="rounded-lg bg-primary px-5 py-2 font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              {pending ? "Creating..." : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreate;
