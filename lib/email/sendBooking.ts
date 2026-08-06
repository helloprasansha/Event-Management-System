import { resend } from "./email";

export async function sendBookingConfirmationEmail({
  email,
  name,
  eventTitle,
  eventDate,
  venue,
  quantity,
  total,
}: {
  email: string;
  name: string;
  eventTitle: string;
  eventDate: string;
  venue: string;
  quantity: number;
  total: number;
}) {
  const result = await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: email,
    subject: `Booking Confirmation - ${eventTitle}`,
    html: `
      <h2>Hello ${name},</h2>

      <p>Your booking has been received successfully.</p>

      <table>
        <tr>
          <td><b>Event</b></td>
          <td>${eventTitle}</td>
        </tr>

        <tr>
          <td><b>Date</b></td>
          <td>${eventDate}</td>
        </tr>

        <tr>
          <td><b>Venue</b></td>
          <td>${venue}</td>
        </tr>

        <tr>
          <td><b>Quantity</b></td>
          <td>${quantity}</td>
        </tr>

        <tr>
          <td><b>Total</b></td>
          <td>Rs. ${total}</td>
        </tr>

        <tr>
          <td><b>Status</b></td>
          <td>Pending</td>
        </tr>
      </table>

      <br/>

      <p>Your booking is currently pending.</p>

      <p>
        Once confirmed, you will receive another email containing your ticket and QR code.
      </p>

      <br/>

      <b>Thank you for choosing Event Management System.</b>
    `,
  });

  console.log(result);
}