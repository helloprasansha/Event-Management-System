import {
    FaCalendarDays,
    FaMagnifyingGlass,
    FaTicket,
    FaUsers,
  } from "react-icons/fa6";
  
  export default function AboutPage() {
    return (
      <main className="bg-stone-50 text-stone-800">
  
        <section className="border-b border-stone-200">
          <div className="container mx-auto px-6 py-16">
            <p className="text-sm font-medium text-stone-500">
              About EMS
            </p>
  
            <h1 className="mt-3 text-4xl font-bold text-stone-900">
              Bringing people and events together.
            </h1>
  
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
              EMS is an event management platform designed to make
              discovering and registering for events simple. From
              workshops and conferences to concerts and community
              gatherings, everything you need is in one place.
            </p>
          </div>
        </section>
  
        <section className="container mx-auto px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
  
            <div>
              <p className="text-sm font-medium text-stone-500">
                Our Purpose
              </p>
  
              <h2 className="mt-3 text-3xl font-bold text-stone-900">
                Events should be easy to find.
              </h2>
  
              <p className="mt-5 leading-7 text-stone-600">
                Finding the right event should not mean searching through
                different websites, social media pages, and scattered
                announcements. EMS brings events together so users can
                explore what is happening and choose what interests them.
              </p>
  
              <p className="mt-4 leading-7 text-stone-600">
                Our goal is to create a simple experience for event
                attendees, from discovering an event to securing a place.
              </p>
            </div>
  
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="grid gap-8 sm:grid-cols-2">
  
                <div>
                  <FaMagnifyingGlass className="text-2xl text-stone-600" />
  
                  <h3 className="mt-3 font-semibold text-stone-900">
                    Discover
                  </h3>
  
                  <p className="mt-2 text-sm text-stone-500">
                    Explore events based on your interests and location.
                  </p>
                </div>
  
                <div>
                  <FaTicket className="text-2xl text-stone-600" />
  
                  <h3 className="mt-3 font-semibold text-stone-900">
                    Register
                  </h3>
  
                  <p className="mt-2 text-sm text-stone-500">
                    Reserve your place without unnecessary steps.
                  </p>
                </div>
  
                <div>
                  <FaCalendarDays className="text-2xl text-stone-600" />
  
                  <h3 className="mt-3 font-semibold text-stone-900">
                    Stay Organized
                  </h3>
  
                  <p className="mt-2 text-sm text-stone-500">
                    Keep track of upcoming events and registrations.
                  </p>
                </div>
  
                <div>
                  <FaUsers className="text-2xl text-stone-600" />
  
                  <h3 className="mt-3 font-semibold text-stone-900">
                    Connect
                  </h3>
  
                  <p className="mt-2 text-sm text-stone-500">
                    Find experiences that bring people together.
                  </p>
                </div>
  
              </div>
            </div>
  
          </div>
        </section>
  
        <section className="border-t border-stone-200 bg-white">
          <div className="container mx-auto px-6 py-16">
  
            <p className="text-sm font-medium text-stone-500">
              Why EMS
            </p>
  
            <h2 className="mt-3 text-3xl font-bold text-stone-900">
              Less searching. More experiencing.
            </h2>
  
            <p className="mt-4 max-w-2xl leading-7 text-stone-600">
              Whether you are looking for something happening this
              weekend or planning ahead, EMS gives you a simple way to
              find events and make your plans.
            </p>
  
            <div className="mt-10 grid gap-6 md:grid-cols-3">
  
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
                <h3 className="font-semibold text-stone-900">
                  Simple to Explore
                </h3>
  
                <p className="mt-2 text-sm text-stone-500">
                  Browse events without getting lost in unnecessary
                  information.
                </p>
              </div>
  
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
                <h3 className="font-semibold text-stone-900">
                  Built for Attendees
                </h3>
  
                <p className="mt-2 text-sm text-stone-500">
                  Everything you need to discover and register for events
                  in one place.
                </p>
              </div>
  
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
                <h3 className="font-semibold text-stone-900">
                  Made for Experiences
                </h3>
  
                <p className="mt-2 text-sm text-stone-500">
                  Focus on enjoying the event instead of worrying about
                  the booking process.
                </p>
              </div>
  
            </div>
          </div>
        </section>
  
      </main>
    );
  }