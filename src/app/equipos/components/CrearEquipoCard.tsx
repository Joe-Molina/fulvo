'use client'
import React, { useState } from 'react'
import {CreateEquipo} from '../services/crearEquipo'

export function CrearEquipoCard({id}: any) {
    
    const [nombre, setnombre] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [logo, setlogo] = useState('')

   
    const id_usuario_creador = Number(id)
   
     return (
       <div className='max-h-64 mb-10'>
           <form 
           onSubmit={async (e) => {
               e.preventDefault();

               console.log(id_usuario_creador,
                nombre,
                logo,
                descripcion,)
   
               await CreateEquipo({
                id_usuario_creador,
                nombre,
                logo,
                descripcion,
               })    

               location.reload()
           }}
           className='flex flex-col bg-neutral-800 p-3 text-neutral-300 '>
               <p className='text-neutral-300'>Crear Equipo</p>
               <label htmlFor="">Nombre del equipo:</label>
               <input type="text" name='nombre' onChange={(e) => setnombre(e.target.value)} placeholder='nombre' className='bg-neutral-700 p-1 rounded-md mb-2' required/>
               <label htmlFor="">descripcion del equipo:</label>
               <input type="text" name='descripcion' onChange={(e) => setdescripcion(e.target.value)} placeholder='descripcion' className='bg-neutral-700 p-1 mb-2 rounded-md ' required/>
               <label htmlFor="">logo del equipo:</label>
               <input type="text" name='logo' onChange={(e) => setlogo(e.target.value)} placeholder='ingresa una url para el logo' className='bg-neutral-700 p-1 mb-2 rounded-md ' required/>
               <input type="submit" className='bg-slate-600 rounded-sm p-1 hover:bg-slate-800'/>
           </form>
       </div>
     )
   }

                