import React from 'react'
import { CrearEquipoCard } from './components/CrearJugador'
import { getServerSession } from 'next-auth';
import { loginIsRequiredServer } from '../api/auth/[...nextauth]/route';
import { Jugadores } from './components/Jugadores';

async function page() {

  const session = await loginIsRequiredServer();

  //@ts-ignore
  const userId = session.user.id

  return (
   <div className='flex justify-around shadow-lg rounded-md m-4 bg-neutral-900 h-[calc(100%-6rem)]  p-4 '>
    <div className='w-full flex flex-col p-4 '>
     <CrearEquipoCard id={userId} />
    <Jugadores/>
    </div>
   </div>
  )
}

export default page