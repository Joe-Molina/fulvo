import React from 'react'
import {loginIsRequiredServer } from '@/app/api/auth/[...nextauth]/route';
import { CrearEquipoCard } from './components/CrearEquipoCard';
import {Equipos} from './components/Equipos'


async function page() {

   const session = await loginIsRequiredServer();
    //@ts-ignore

    const userId = session.user.id

    console.log(userId)

  return (
    <div className='flex justify-around m-4 bg-neutral-900 h-[calc(100%-6rem)] shadow-2xl p-4'>
        <div className='w-full flex flex-col p-4'>
          <CrearEquipoCard id={userId} />
          <Equipos/>
          
        </div>
    </div>
  )
}

export default page