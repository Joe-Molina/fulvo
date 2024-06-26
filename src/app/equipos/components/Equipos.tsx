'use client'

import React, { useEffect, useState } from 'react'

export function Equipos() {
  let [equipos, setequipos] = useState([])

  useEffect(() => {

    fetch('/api/equipos')
      .then(response => response.json())
      .then(data => { setequipos(data) })
      .catch(error => console.log(error));


  }, [])

  console.log(equipos)
  return (
    <>
      <p className='mt-3 text-neutral-300'>equipos registrados</p>
      <article className='my-2 bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full '>
        <h3 className='w-32 mr-2'>Nombre</h3>
        <p className=' w-32 mr-2'>logo</p>
        <p className=' '>descripcion</p>
      </article>
      <div className='flex flex-col overflow-auto '>
        {

          equipos.map((equipo: any, index) => (
            <article className=' bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full border-b border-b-neutral-900' key={index}>
              <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{equipo.nombre}</h3>
              <div className='w-32'><img className='w-8 h-8 mr-2 max-h-6 overflow-hidden' src={"/fotos/" + equipo.logo} /></div>
              <p className=' overflow-hidden'>{equipo.descripcion}</p>
            </article>
          ))
        }
      </div>
    </>
  )
}