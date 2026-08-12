import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="bg-stone-800 py-16">
      <div className="container mx-auto px-6 text-center">

        <p className="text-sm font-medium text-stone-300">
          Stay Updated
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Never Miss an Event
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-stone-300">
          Subscribe to receive updates about upcoming events,
          workshops, concerts, and conferences.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-11 border-stone-600 bg-stone-50 text-stone-900 placeholder:text-stone-400"
          />

          <Button className="h-11 bg-stone-100 px-6 text-stone-800 hover:bg-white">
            Subscribe
          </Button>
        </div>

      </div>
    </section>
  );
}