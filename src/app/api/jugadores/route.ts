import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jugadores = await prisma.jugadores.findMany();
    return NextResponse.json(jugadores);
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

export async function POST(request: Request) {
  try {
    const {
      id_usuario_creador,
      id_equipo,
      nombre,
      apellido,
      posicion,
      fechaDeNacimiento,
      descripcion,
    } = await request.json();

    const newJugador = await prisma.jugadores.create({
      data: {
        id_usuario_creador,
        id_equipo,
        nombre,
        apellido,
        posicion,
        fechaDeNacimiento,
        descripcion,
      },
    });

    return NextResponse.json(newJugador);
  } catch (error) {}
}
