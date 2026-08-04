"use client";
import QRCode from "react-qr-code";

export default function EventQRDialog({
  eventId,
}: {
  eventId: string;
}) {
  const url = `http://localhost:3000/events/${eventId}`;

  return (
    <QRCode value={url} size={220} />
  );
}