'use client'
import React, { useEffect, useState } from 'react'
import {CreateJugador} from '../services/crearJugador'
import { equipos } from '../services/equipos'

export function CrearEquipoCard({id}: any) {

    const [Equipos, setEquipos] = useState([]);

    useEffect(() => {

        const obtenerEquipos = async () => {
        const equiposObtenidos = await equipos();
        setEquipos(equiposObtenidos);
        };

        obtenerEquipos();
    }, []);
    
    console.log(Equipos)
    
    const [nombre, setnombre] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [apellido, setapellido] = useState('')
    const [posicion, setposicion] = useState('')
    const [id_equipo, setid_equipo] = useState(0)
    const [fecha, setfechaDeNacimiento] = useState('')
    
    const fechaDeNacimiento = new Date(fecha)

    const id_usuario_creador = Number(id)
   
     return (
       <div className='max-h-64'>
           <form 
           onSubmit={async (e) => {
               e.preventDefault();

               console.log(        
                id_usuario_creador,
                id_equipo,
                nombre,
                apellido,
                posicion,
                fechaDeNacimiento,
                descripcion,)
   
               await CreateJugador({
                id_usuario_creador,
                id_equipo,
                nombre,
                apellido,
                posicion,
                fechaDeNacimiento,
                descripcion,
               })    

               location.reload()
           }}
           className='flex flex-col gap-2 bg-zinc-800 p-3 text-neutral-300 '>
               <p className='text-neutral-300'>Crear a un jugador</p>
               <input type="text" name='nombre' onChange={(e) => setnombre(e.target.value)} placeholder='nombre' className='bg-neutral-900 p-1 rounded-md' required/>
               <input type="text" name='apellido' onChange={(e) => setapellido(e.target.value)} placeholder='apellido' className='bg-neutral-900 p-1 rounded-md ' required/>
               <input type="text" name='descripcion' onChange={(e) => setdescripcion(e.target.value)} placeholder='descripcion' className='bg-neutral-900 p-1 rounded-md ' required/>
               <input type="text" name='posicion' onChange={(e) => setposicion(e.target.value)} placeholder='posicion' className='bg-neutral-900 p-1 rounded-md ' required/>
               <input type="date" name='fecha Nacimiento' onChange={(e) => setfechaDeNacimiento(e.target.value)} placeholder='fecha Nacimiento' className='bg-neutral-900 p-1 rounded-md ' required/>

               <select className='bg-neutral-900 text-neutral-300 p-1 rounded-md' name="productos" id="" onChange={(e) => { const number = Number(e.target.value); setid_equipo(number);}}>

                {
                    Equipos.map((equipo, index) => (
                       //@ts-ignore
                        <option className='placeholder:text-neutral-500 p-1 rounded-md' key={index} value={equipo.id}>{equipo.nombre}</option>

                    ))
                }

                </select>

               <input type="submit" className='bg-slate-600 rounded-sm p-1 hover:bg-slate-800'/>
           </form>
       </div>
     )
   }

               