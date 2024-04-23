import React from 'react'
import Link from 'next/link'
import { ButtonSignIn, ButtonSignOut } from './buttonSignOut'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { RespaldoButton } from './RespaldoButton'
import { getUsuario } from '../services/Getsuario'



export async function Header() {



  //@ts-ignore
  const session = await getServerSession(authOptions)

  const usuario = await getUsuario(session)

  console.log('usuario')
  console.log(usuario)


  return (
    //@ts-ignore
    <header className={`w-full flex justify-around gap-6   font-light h-14 items-center shadow-md ${usuario.tipo_usuario == 'admin' ? 'bg-neutral-900 text-neutral-100' : 'bg-white text-neutral-900'}`}>
      <Link href="/" rel="stylesheet">Funlinafutsal</Link>
      {
        session ?

          <div className='flex items-center gap-6'>

            <Link rel="stylesheet" href="/jugadores" className='hover:text-slate-400  transition '>Crear Jugadores</Link>
            {
              //@ts-ignore
              usuario.tipo_usuario == 'admin' &&
              <>
                <Link rel="stylesheet" href="/equipos" className='hover:text-slate-400 transition '>Crear Equipos</Link>
                <Link rel="stylesheet" href="/auditoria" className='hover:text-slate-400  transition '>auditoria</Link>
                <RespaldoButton />
              </>

            }


            {/* <ButtonSignOut /> */}
          </div>

          :

          <div>
            <ButtonSignIn />
            <Link href='/auth/register' className=' text-zinc-200 shadow-sm bg-zinc-700 hover:bg-slate-700 transition px-3 py-1 text-sm rounded-sm ml-3'>Registarse</Link>
          </div>
      }
    </header>
  )
}
