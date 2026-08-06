import {
  BookOpen,
  CircleHelp,
  Bug,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function GetHelpPage() {
  return (
    <div className="space-y-8 p-6">
   
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Get Help</h1>
        <p className="text-muted-foreground">
          Need assistance? Find answers, report issues, or contact our support
          team.
        </p>
      </div>

     
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 text-primary" />
            <CardTitle>User Guide</CardTitle>
            <CardDescription>
              Learn how to use the Event Management System.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CircleHelp className="h-8 w-8 text-primary" />
            <CardTitle>FAQs</CardTitle>
            <CardDescription>
              Browse common questions and answers.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Bug className="h-8 w-8 text-primary" />
            <CardTitle>Report Issue</CardTitle>
            <CardDescription>
              Let us know if you find any bugs or problems.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 text-primary" />
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Reach our support team for assistance.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Find quick answers to common questions.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>
                How do I create an event?
              </AccordionTrigger>
              <AccordionContent>
                Go to <strong>Events =: Create Event</strong>, fill in the event
                details, upload a banner, and click <strong>Create</strong>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2">
              <AccordionTrigger>
                How do bookings work?
              </AccordionTrigger>
              <AccordionContent>
                Users can book an event from the Events page. Bookings will
                appear automatically in the Admin Booking Management page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="3">
              <AccordionTrigger>
                How do QR codes work?
              </AccordionTrigger>
              <AccordionContent>
                Each event has a unique QR code that links directly to its
                details page. Users can scan the QR code to view event
                information instantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="4">
              <AccordionTrigger>
                Can I edit or delete an event?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Go to the Events page and use the Edit or Delete actions
                beside the event.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="5">
              <AccordionTrigger>
                How do I export booking data?
              </AccordionTrigger>
              <AccordionContent>
                Visit the Bookings page and click the Export CSV button to
                download booking information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

     
      <div className="grid gap-6 lg:grid-cols-2">
       
        <Card>
          <CardHeader>
            <CardTitle>Report an Issue</CardTitle>
            <CardDescription>
              Having trouble? Send us the details.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 gap-2">
            <div>
              <Label>Issue Title</Label>
              <Input placeholder="Enter issue title" />
            </div>

            <div>
              <Label>Category</Label>
              <select className="mt-2 w-full rounded-md border p-2 gap-2">
                <option>Bug</option>
                <option>Booking</option>
                <option>Payment</option>
                <option>Events</option>
                <option>Venue</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <Label>Description</Label>
              <Textarea
                placeholder="Describe the issue..."
                rows={5}
              />
            </div>

            <Button className="w-full">
              Submit Issue
            </Button>
          </CardContent>
        </Card>

       
        <Card>
          <CardHeader>
            <CardTitle>Support Contact</CardTitle>
            <CardDescription>
              Contact our support team if you need assistance.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                yurassupport@ems.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">
                  +977-9703736748
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Office Hours</p>
                <p className="text-sm text-muted-foreground">
                  Sunday - Friday
                </p>
                <p className="text-sm text-muted-foreground">
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}