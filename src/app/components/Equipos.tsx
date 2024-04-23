'use client'

import React, { useEffect, useState } from 'react'

const handleClick = async (id: any) => {
  const res2 = await fetch(`/api/equipos/${id}`, {
    method: "DELETE"
  }
  )
  const data2 = await res2.json()
  location.reload()
}

const handleClick2 = async (id: any) => {
  const res2 = await fetch(`/api/jugadores/${id}`, {
    method: "DELETE"
  }
  )
  const data2 = await res2.json()
  location.reload()
}

export function Equipos({ admin }: any) {

  const esAdmin = (admin.tipo_usuario == 'admin') ? true : false


  let [equipos, setequipos] = useState([])

  console.log(equipos)

  useEffect(() => {

    fetch('/api/equipos')
      .then(response => response.json())
      .then(data => { setequipos(data) })
      .catch(error => console.log(error));


  }, [])
  //////////////// jugadores
  const [jugadores, setjugadores] = useState([]);

  const actualizarJugadores = (id: any) => {
    fetch(`/api/jugadores/${id}`)
      .then(response => response.json())
      .then(data => { setjugadores(data) })
      .catch(error => console.log(error));
  }


  return (
    <div className='flex gap-10'>
      <div className='flex flex-col overflow-auto w-1/2'>
        <article className={`my-2  p-1 px-4 flex justify-start w-full ${esAdmin ? 'bg-neutral-900 text-neutral-300' : 'text-black border-neutral-600 border-b'} `}>
          <h3 className='w-32 mr-2'>Nombre</h3>
          <p className=' w-32 mr-2'>logo</p>
          <p className=' '>descripcion</p>
        </article>
        {

          equipos.map((equipo: any, index) => (
            <article className={`  text-neutral-300 p-1 px-4 flex w-full border-b   justify-between transition duration-75 ${esAdmin ? 'border-b-neutral-900 bg-neutral-800 hover:bg-slate-700' : ' text-black border-neutral-600 hover:bg-slate-700 hover:text-slate-200'}`} key={index} onClick={() => { actualizarJugadores(equipo.id) }}>
              <div className='flex'>
                <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{equipo.nombre}</h3>
                <div className='w-32'><img className='w-8 h-8 mr-2 max-h-6 overflow-hidden ' src={"/fotos/" + equipo.logo} /></div>
                <p className=' overflow-hidden'>{equipo.descripcion}</p>
              </div>

              {esAdmin && <button onClick={() => handleClick(equipo.id)} className='bg-red-600 text-white px-3 py-1 rounded-sm m-1 hover:bg-red-700 transition'>Eliminar</button>}
            </article>
          ))
        }
      </div>
      <div className='flex flex-col overflow-auto w-1/2'>

        <article className={`my-2  p-1 px-4 flex justify-start w-full ${esAdmin ? 'bg-neutral-900 text-neutral-300' : 'text-black border-neutral-600 border-b'} `}>
          <h3 className='w-32 mr-2'>Nombre</h3>
          <p className=' w-32 mr-2'>nacimiento</p>
          <p className=' w-32 mr-2'>posicion</p>
          <p className=' '>descripcion</p>
        </article>
        <div className='flex flex-col overflow-auto '>
          {

            jugadores.map((jugador: any, index) => {

              return (
                <article className={`  text-neutral-300 p-1 px-4 flex w-full border-b   justify-between transition duration-75 ${esAdmin ? 'border-b-neutral-900 bg-neutral-800 hover:bg-slate-700' : ' text-black border-neutral-600'}`} key={index}>
                  <div className='flex'>
                    <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{jugador.nombre + ' ' + jugador.apellido}</h3>
                    <p className=' overflow-hidden w-32 mr-2'>{(jugador.fechaDeNacimiento.slice(2, 10))}</p>
                    <p className=' overflow-hidden w-32 mr-2'>{jugador.posicion}</p>
                    <p className=' overflow-hidden'>{jugador.descripcion}</p>
                  </div>
                  {esAdmin && <button onClick={() => handleClick2(jugador.id)} className='bg-red-600 text-white px-3 py-1 rounded-sm m-1 hover:bg-red-700 transition'>Eliminar</button>}
                </article>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}