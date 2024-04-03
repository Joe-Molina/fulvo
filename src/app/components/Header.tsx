import React from 'react'
import Link from 'next/link'
import { ButtonSignOut } from './buttonSignOut'

export function Header() {
  return (
    <header className='w-full flex justify-around gap-6 bg-neutral-900 text-neutral-100 font-light h-14 items-center shadow-md'>
        <Link href="/" rel="stylesheet">Funlinafutsal</Link>
        <div className='flex gap-6'>
        <Link rel="stylesheet" href="/equipos" className='hover:text-slate-400 transition '>Crear Equipos</Link>
        <Link rel="stylesheet" href="/jugadores" className='hover:text-slate-400  transition '>Crear Jugadores</Link>
        </div>
        <ButtonSignOut/>
    </header>
  )
}
