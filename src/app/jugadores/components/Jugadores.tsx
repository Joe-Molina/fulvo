'use client'

import React, { useEffect, useState } from 'react'

export function Jugadores() {
  let [jugadores, setjugadores] = useState([])

    useEffect(() => {

      fetch('/api/jugadores')
      .then(response => response.json())
      .then(data => {setjugadores(data)})
      .catch(error => console.log(error));


    }, [])

    console.log(jugadores)
  return (
    <>
      <p className='mt-20 text-neutral-300'>jugadores registrados</p>
        <article className='my-2 bg-neutral-900 text-neutral-300 p-1 px-4 flex justify-start w-full '>
        <h3 className='w-32 mr-2'>Nombre</h3>
        <p className=' w-32 mr-2'>nacimiento</p>
        <p className=' w-32 mr-2'>posicion</p>
        <p className=' w-32 mr-2'>equipo</p>
        <p className=' '>descripcion</p>
        </article>
    <div className='flex flex-col overflow-auto '>
      {
      
        jugadores.map((jugador: any, index) => (
          <article className=' bg-neutral-950 text-neutral-300 p-1 px-4 flex justify-start w-full border-b border-b-neutral-900' key={index}>
            <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{jugador.nombre + ' ' + jugador.apellido}</h3>
            <p className=' overflow-hidden w-32 mr-2'>{(jugador.fechaDeNacimiento.slice(2,10))}</p>
            <p className=' overflow-hidden w-32 mr-2'>{jugador.posicion}</p>
            <p className=' overflow-hidden w-32 mr-2'>{jugador.id_equipo}</p>
            <p className=' overflow-hidden'>{jugador.descripcion}</p>
          </article>
        ))
      }
    </div>
    </>
  )
}