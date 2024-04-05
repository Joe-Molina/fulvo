'use client'

import React, { useEffect, useState } from 'react'

export function Equipos() {
  let [equipos, setequipos] = useState([])

    useEffect(() => {

      fetch('/api/equipos')
      .then(response => response.json())
      .then(data => {setequipos(data)})
      .catch(error => console.log(error));


    }, [])
//////////////// jugadores
const [jugadores, setjugadores] = useState([]);

const actualizarJugadores = (id:any) => { 
      fetch(`/api/jugadores/${id}`)
      .then(response => response.json())
      .then(data => {setjugadores(data)})
      .catch(error => console.log(error));
}


  return (
    <div className='flex gap-10'>
    <div className='flex flex-col overflow-auto w-1/2'>
        <article className='my-2 bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full '>
        <h3 className='w-32 mr-2'>Nombre</h3>
        <p className=' w-32 mr-2'>logo</p>
        <p className=' '>descripcion</p>
        </article>
      {
      
        equipos.map((equipo: any, index) => (
          <article className=' bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full border-b border-b-neutral-900 hover:bg-slate-700' key={index} onClick={() => {actualizarJugadores(equipo.id)}}>
            <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{equipo.nombre}</h3>
            <div className='w-32'><img className='w-8 h-8 mr-2 max-h-6 overflow-hidden ' src={equipo.logo}/></div>
            <p className=' overflow-hidden'>{equipo.descripcion}</p>
          </article>
        ))
      }
    </div>
    <div className='flex flex-col overflow-auto w-1/2'>

        <article className='my-2 bg-neutral-900 text-neutral-300 p-1 px-4 flex justify-start w-full '>
          <h3 className='w-32 mr-2'>Nombre</h3>
          <p className=' w-32 mr-2'>nacimiento</p>
          <p className=' w-32 mr-2'>posicion</p>
          <p className=' '>descripcion</p>
        </article>
        <div className='flex flex-col overflow-auto '>
      {
      
        jugadores.map((jugador: any, index) => {

          return (
            <article className=' bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full border-b border-b-neutral-900 shadow-lg rounded-sm' key={index}>
              <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{jugador.nombre + ' ' + jugador.apellido}</h3>
              <p className=' overflow-hidden w-32 mr-2'>{(jugador.fechaDeNacimiento.slice(2,10))}</p>
              <p className=' overflow-hidden w-32 mr-2'>{jugador.posicion}</p>
              <p className=' overflow-hidden'>{jugador.descripcion}</p>
            </article>
          )
        })
      }

    </div>
    </div>
    </div>
  )
}