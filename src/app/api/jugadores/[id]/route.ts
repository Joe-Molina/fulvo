import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const jugadores = await prisma.jugadores.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!jugadores) {
      return NextResponse.json(
        { message: "jugadores no encontrada" },
        { status: 404 }
      );
    }

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

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deleteJugador = await prisma.jugadores.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteJugador) {
      return NextResponse.json(
        { message: "jugador no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(deleteJugador);
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

export async function PUT(request: Request, { params }: Params) {
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

    const updateJugador = await prisma.jugadores.update({
      where: {
        id: Number(params.id),
      },
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

    if (!updateJugador) {
      return NextResponse.json(
        { message: "jugador no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(updateJugador);
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
