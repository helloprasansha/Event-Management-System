'use server'
import { db } from '@/db'
import { events } from '@/db/schema'
import React from 'react'
import { eq } from 'drizzle-orm'
export default async function getUpcomingEvents() {
    try{
         const eventData= await db.select().from(events).where(eq(events.status, "upcoming")).limit(5)
return {
    success: true,
    message: "event data successfully fetched",
    data: eventData
}

    }
    catch(error){
        console.log(error)
        return {
            success: "error",
            message: "failed to get event data"
            
        }
    }
    
}
