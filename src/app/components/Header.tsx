import React from 'react'
import Link from 'next/link'
import { ButtonSignIn, ButtonSignOut } from './buttonSignOut'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export async function Header() {

  //@ts-ignore
  const session = await getServerSession(authOptions)

  return (
    <header className='w-full flex justify-around gap-6 bg-neutral-900 text-neutral-100 font-light h-14 items-center shadow-md'>
        <Link href="/" rel="stylesheet">Funlinafutsal</Link>
        
        {
          session?

          <div className='flex gap-6'>
        <Link rel="stylesheet" href="/equipos" className='hover:text-slate-400 transition '>Crear Equipos</Link>
        <Link rel="stylesheet" href="/jugadores" className='hover:text-slate-400  transition '>Crear Jugadores</Link>
        <Link rel="stylesheet" href="/auditoria" className='hover:text-slate-400  transition '>auditoria</Link>
        <ButtonSignOut/>
        </div>

        : 

        <ButtonSignIn/>
        }
    </header>
  )
}
