import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const equipo = await prisma.equipos.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!equipo) {
      return NextResponse.json(
        { message: "equipo no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(equipo);
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
    const deleteEquipo = await prisma.equipos.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteEquipo) {
      return NextResponse.json(
        { message: "Equipo no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(deleteEquipo);
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
    const { id_usuario_creador, nombre, logo, descripcion } =
      await request.json();

    const updateEquipo = await prisma.equipos.update({
      where: {
        id: Number(params.id),
      },
      data: {
        id_usuario_creador,
        nombre,
        logo,
        descripcion,
      },
    });

    if (!updateEquipo) {
      return NextResponse.json(
        { message: "Equipo no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(updateEquipo);
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
