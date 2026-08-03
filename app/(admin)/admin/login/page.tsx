import { AuthForm } from '@/components/auth-form'
import React from 'react'

const page = () => {
  return (
    <div>
      <AuthForm mode="login" audience="admin" />
    </div>
  )
}

export default page
