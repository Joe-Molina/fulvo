import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET() {

    //equipos, iniciosdesesion, jugadores,

    const equipos = await prisma.equipos.findMany()
    const inicios = await prisma.iniciosDeSesion.findMany()
    const jugadores = await prisma.jugadores.findMany()
    const usuarios = await prisma.usuarios.findMany()

  try {


    const sqlStatements = `
    CREATE TABLE equipos (
        id int(11) NOT NULL,
        id_usuario_creador int(11) NOT NULL,
        nombre varchar(191) NOT NULL,
        logo varchar(191) NOT NULL,
        descripcion varchar(191) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

      INSERT INTO equipos (id, id_usuario_creador, nombre, logo, descripcion, created_at) VALUES

      ${
        equipos.map(equipo => (
            `(${equipo.id},${equipo.id_usuario_creador},'${equipo.nombre}','${equipo.logo}','${equipo.descripcion}','${equipo.created_at}')
     `
        ))
      }

      CREATE TABLE iniciosdesesion (
        id int(11) NOT NULL,
        id_usuario int(11) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    INSERT INTO iniciosdesesion (id, id_usuario, created_at) VALUES
    ${
        inicios.map(data => (
            `(${data.id},${data.id_usuario},'${data.created_at}')
   `
        ))
    }
      
      CREATE TABLE jugadores (
          id int(11) NOT NULL,
          id_usuario_creador int(11) NOT NULL,
          id_equipo int(11) NOT NULL,
          nombre varchar(191) NOT NULL,
          apellido varchar(191) NOT NULL,
          posicion varchar(191) NOT NULL,
          fechaDeNacimiento datetime(3) NOT NULL,
          descripcion varchar(191) NOT NULL,
          created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        INSERT INTO jugadores (id, id_usuario_creador, id_equipo, nombre, apellido, posicion, fechaDeNacimiento, descripcion, created_at) VALUES
    ${
            jugadores.map(data => (
            `(${data.id},${data.id_usuario_creador},${data.id_equipo},'${data.nombre}','${data.apellido}','${data.posicion}','${data.fechaDeNacimiento}','${data.descripcion}','${data.created_at}')
   `
        ))
    }
        
    CREATE TABLE usuarios (
        id int(11) NOT NULL,
        username varchar(191) NOT NULL,
        email varchar(191) NOT NULL,
        password varchar(191) NOT NULL,
        tipo_usuario varchar(191) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

      INSERT INTO usuarios (id, username, email, password, tipo_usuario, created_at) VALUES
      ${
        usuarios.map(data => (
        `(${data.id},'${data.username}','${data.email}','${data.password}','${data.tipo_usuario}','${data.created_at}')
     `
    ))
}



`;

const respaldo = fs.writeFile('respaldoFulvo.sql', sqlStatements, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('create_users.sql file created successfully!');
});

    
    return NextResponse.json(respaldo);




  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}




