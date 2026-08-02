const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/register", label: "Sign Up", variant: "primary" },
    { href: "/login", label: "Login" },
  ];

import { Button } from '@/components/ui/button';
import Link from 'next/link';
  import React from 'react'

  export default function Navlink() {
    return (
      <div className='flex flex-row justify-end gap-4 flex-1 '>
        
        <div className='flex flex-col gap-6 sm:flex-row '>    
        <div>
          <Link href="/"><Button variant="link">Home</Button></Link>
        </div>
        <div>
          <Link href="/events"><Button variant="link">Events</Button></Link>
        </div>
        <div>
          <Link href="/register"><Button variant="link">Sign Up</Button></Link>
        </div>
        <div>
          <Link href="/login"><Button variant="link">Login</Button></Link>  
        </div>
        </div>
      </div> 
    )
  }
  