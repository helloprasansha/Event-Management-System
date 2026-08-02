import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 interface eventCardType  {
    id: string,
    title: string,
    status: string,
    venue: string,
    startTime: string,
    endTime: string,
    eventDate: string, 
    price: number,
}
export function EventsCard( {
    id, title, status, venue, startTime, endTime, eventDate,price
}: eventCardType) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
        <Badge variant="secondary" className="absolute top-2 left-2 z-100 bg-green-100 text-green-600"> {status} </Badge>

      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle> {title} </CardTitle>
        
      </CardHeader>
      <CardContent>
        <div>  {eventDate}</div>
        <div> {startTime} {endTime}/</div>
        <div>{venue}</div>
        <CardFooter>
         <p>
             <span className="font-bold"> {price} </span>
        <Button variant="link">View Details</Button>
        </p>
      </CardFooter>
       </CardContent>
      
    </Card>
  )
}
