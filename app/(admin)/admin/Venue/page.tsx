
import { Button } from "@/components/ui/button";
import AddVenue from "./addVenue";

export default function VenuesPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Venues
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage event venues, availability, capacity, and location details
            from one place.
          </p>
        </div>
      </div>

      <AddVenue />
    </div>
  );
}