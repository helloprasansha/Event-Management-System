import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="bg-indigo-600 py-20">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold">
          Never Miss an Event
        </h2>

        <p className="mt-4 text-indigo-100">
          Subscribe to receive updates about upcoming events,
          workshops, concerts, and conferences.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black"
          />

          <Button className="bg-black hover:bg-gray-800">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}