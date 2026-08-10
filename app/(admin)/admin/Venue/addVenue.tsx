"use client";

import { createVenue } from "./action/createVenue";

export default function AddVenue() {
  async function handleSubmit(formData: FormData) {
    await createVenue(formData);
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">
          Venue Name
        </label>

        <input
          name="name"
          type="text"
          placeholder="Enter venue name"
          className="mt-1 w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Location
        </label>

        <input
          name="location"
          type="text"
          placeholder="Enter venue location"
          className="mt-1 w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Capacity
        </label>

        <input
          name="capacity"
          type="number"
          placeholder="Enter venue capacity"
          min="1"
          className="mt-1 w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Description
        </label>

        <textarea
          name="description"
          placeholder="Enter venue description"
          rows={4}
          className="mt-1 w-full rounded-md border px-3 py-2"
        /> g
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Add Venue
      </button>
    </form>
  );
}
