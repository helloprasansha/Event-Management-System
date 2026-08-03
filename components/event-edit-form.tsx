  "use client";

  import Link from "next/link";
  import { useActionState, useEffect } from "react";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";

  import { updateEvent } from "@/app/(admin)/admin/events/actions/updateevent";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { cn } from "@/lib/utils";
  import {
    eventEditFormSchema,
    type EventEditFormSchema,
  } from "@/lib/validation/event";

  import { startTransition } from "react";
  import type { ReactNode } from "react";

  type EventEditFormProps = {
    event: {
      status: "upcoming" | "ongoing" | "completed" | null | undefined;
      id: string;
      title: string;
      description: string;
      venue: string;
      eventDate: string;
      startTime: string;
      endTime: string;
      capacity: number;
      price: number;
      banner: string | null;
    };
  };

  type FormState = {
    errors: Record<string, string[] | undefined>;
  };

  const initialState: FormState = { errors: {} };

  const fieldMap: Partial<Record<string, keyof EventEditFormSchema>> = {
    event_Date: "eventDate",
    Start_Time: "startTime",
    End_Time: "endTime",
  };

  export function EventEditForm({ event }: EventEditFormProps) {
    const [state, formAction, pending] = useActionState(
      updateEvent.bind(null, event.id),
      initialState
    );
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
    } = useForm<EventEditFormSchema>({
      resolver: zodResolver(eventEditFormSchema),
      defaultValues: {
        title: event.title,
        description: event.description,
        venue: event.venue,
        eventDate: event.eventDate,
        startTime: event.startTime,
        endTime: event.endTime,
        capacity: event.capacity,
        price: event.price,
        banner: event.banner ?? "",
        status: event.status ?? "upcoming",
      },
    });

    useEffect(() => {
      for (const [key, messages] of Object.entries(state.errors)) {
        const field = fieldMap[key] ?? (key as keyof EventEditFormSchema);
        if (messages?.[0]) setError(field, { message: messages[0] });
      }
    }, [setError, state.errors]);

    const onSubmit = (data: EventEditFormSchema) => {
      const formData = new FormData();

      formData.set("title", data.title);
      formData.set("description", data.description);
      formData.set("venue", data.venue);
      formData.set("eventDate", data.eventDate);
      formData.set("startTime", data.startTime);
      formData.set("endTime", data.endTime);
      formData.set("capacity", String(data.capacity));
      formData.set("price", String(data.price));
      formData.set("banner", data.banner ?? "");
      formData.set("status", data.status);

      startTransition(() => {
        formAction(formData);
      });
    };
    const inputClassName = (hasError: boolean) =>
      cn("w-full rounded-lg border bg-background px-3 py-2", hasError && "border-destructive");

    let statusClass = "";
    let statusText = "";

    if (event.status === "upcoming") {
      statusClass = "bg-blue-100 text-blue-600";
      statusText = "Upcoming";
    } else if (event.status === "ongoing") {
      statusClass = "bg-green-100 text-green-600";
      statusText = "Ongoing"; 
    } else {
      statusClass = "bg-gray-100 text-gray-600";
      statusText = "Completed";
    }

    return (
      <div className="mx-auto w-full max-w-4xl p-6">
        <div className="rounded-xl border bg-background shadow-sm">
          <div className="border-b px-6 py-5">
            <h1 className="text-2xl font-bold">Edit Event</h1>
            <p className="mt-1 text-sm text-muted-foreground">Update the event details and save your changes.</p>
          </div>
          <form className="space-y-6 p-6" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Event Title" error={errors.title?.message}><Input {...register("title")} className={inputClassName(!!errors.title)} /></Field>
              <Field label="Venue" error={errors.venue?.message}><Input {...register("venue")} className={inputClassName(!!errors.venue)} /></Field>
              <Field label="Event Date" error={errors.eventDate?.message}><Input type="date" {...register("eventDate")} className={inputClassName(!!errors.eventDate)} /></Field>
              <Field label="Capacity" error={errors.capacity?.message}><Input type="number" {...register("capacity", { valueAsNumber: true })} className={inputClassName(!!errors.capacity)} /></Field>
              <Field label="Start Time" error={errors.startTime?.message}><Input type="time" {...register("startTime")} className={inputClassName(!!errors.startTime)} /></Field>
              <Field label="End Time" error={errors.endTime?.message}><Input type="time" {...register("endTime")} className={inputClassName(!!errors.endTime)} /></Field>
              <Field label="Ticket Price ($)" error={errors.price?.message}><Input type="number" {...register("price", { valueAsNumber: true })} className={inputClassName(!!errors.price)} /></Field>
              <Field label="Banner Image URL" error={errors.banner?.message}><Input {...register("banner")} className={inputClassName(!!errors.banner)} /></Field>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Status">
                <select
                  {...register("status")}
                  className="w-full rounded-lg border px-3 py-2"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </Field>

              <div className="flex items-end justify-end">
                <span className={cn("inline-flex rounded-full px-3 py-1 text-sm font-medium", statusClass)}>
                  {statusText}
                </span>
              </div>
            </div>

            <Field label="Description" error={errors.description?.message}>
              <textarea rows={5} {...register("description")} className={inputClassName(!!errors.description)} />
            </Field>
            <div className="flex justify-end gap-3">
              <Link href="/admin/events/event-details" className="rounded-lg border px-5 py-2 font-medium hover:bg-muted">Cancel</Link>
              <button type="submit" disabled={pending} className="rounded-lg bg-primary px-5 py-2 font-medium hover:bg-primary/80">
                {pending ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  function Field({ children, error, label }: { children: ReactNode; error?: string; label: string }) {
    return (
      <div className="space-y-2">
        <Label>{label}</Label>
        {children}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }


