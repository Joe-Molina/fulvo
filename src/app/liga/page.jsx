import React from 'react'
import {loginIsRequiredServer } from '@/app/api/auth/[...nextauth]/route';


export default async function page() {
    const {userId} = await loginIsRequiredServer();
  return (
    <div>page</div>
  )
}
