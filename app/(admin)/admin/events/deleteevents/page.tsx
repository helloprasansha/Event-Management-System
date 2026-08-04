"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
``
import { Trash } from "lucide-react";
import { deleteEvent } from "@/app/(admin)/admin/events/actions/deleteevent";

export default function DeleteEventButton({ id }: { id: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="rounded-full p-2 text-destructive hover:bg-destructive/10"
        >
          <Trash size={24} />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Event?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            selected event.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <form action={deleteEvent}>
            <input type="hidden" name="id" value={id} />

            <AlertDialogAction asChild>
              <button type="submit">Delete</button>
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}