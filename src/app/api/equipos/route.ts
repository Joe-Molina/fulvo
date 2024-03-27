import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const equipos = await prisma.equipos.findMany();
    return NextResponse.json(equipos);
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
    const { id_usuario_creador, nombre, logo, descripcion } =
      await request.json();

    const newEquipo = await prisma.equipos.create({
      data: {
        id_usuario_creador,
        nombre,
        logo,
        descripcion,
      },
    });

    return NextResponse.json(newEquipo);
  } catch (error) {}
}
