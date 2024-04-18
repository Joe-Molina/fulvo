'use client'
import React, { useState } from 'react'
import { CreateEquipo } from '../services/crearEquipo'

const serviceSubirArchivoACarpeta = async (file: any) => {
    const form = new FormData()
    //@ts-ignore
    form.set('file', file)

    //sending file
    const res = await fetch('/api/upload', {
        method: "POST",
        body: form
    }
    )

    const data3 = await res.json()
    console.log('nuovo archivo')
    console.log(data3)
}

export function CrearEquipoCard({ id }: any) {

    const [nombre, setnombre] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState()


    const id_usuario_creador = Number(id)

    return (
        <div className='max-h-64 mb-10'>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();

                    await CreateEquipo({
                        id_usuario_creador,
                        nombre,
                        logo: fileName,
                        descripcion,
                    })

                    console.log(file)

                    serviceSubirArchivoACarpeta(file)




                    location.reload()
                }}
                className='flex flex-col bg-neutral-800 p-3 text-neutral-300 '>
                <p className='text-neutral-300'>Crear Equipo</p>
                <label htmlFor="">Nombre del equipo:</label>
                <input type="text" name='nombre' onChange={(e) => setnombre(e.target.value)} placeholder='nombre' className='bg-neutral-700 p-1 rounded-md mb-2' required />
                <label htmlFor="">descripcion del equipo:</label>
                <input type="text" name='descripcion' onChange={(e) => setdescripcion(e.target.value)} placeholder='descripcion' className='bg-neutral-700 p-1 mb-2 rounded-md ' required />
                <label htmlFor="">logo del equipo:</label>
                <input type="file" className='shadow-lg bg-neutral-800 file file:bg-neutral-700 file:text-white' onChange={(e) => {
                    //@ts-ignore 
                    setFile(e.target.files[0])
                    console.log(file)
                    //@ts-ignore
                    setFileName(e.target.files[0].name)
                }} required />
                <input type="submit" className='bg-slate-600 rounded-sm p-1 hover:bg-slate-800' />
            </form>
        </div>
    )
}

