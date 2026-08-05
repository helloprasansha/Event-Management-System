"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createBooking } from "@/app/(admin)/admin/events/actions/createBooking";

interface EventBookingFormProps {
  eventId: string;
  price: number;
  maxQuantity: number;
}

export default function EventBookingForm({ eventId, price, maxQuantity }: EventBookingFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await createBooking(formData);

    setLoading(false);
    if (result.success) {
      setMessage("Booking successful. Check your dashboard for event status.");
    } else {
      setMessage(result.message || "Booking failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          min={1}
          max={maxQuantity}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="w-full"
        />
      </div>

      <input type="hidden" name="eventId" value={eventId} />

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        Total: <span className="font-semibold">Rs. {price * quantity}</span>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Booking..." : "Book Now"}
      </Button>

      {message ? <p className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">{message}</p> : null}
    </form>
  );
}
