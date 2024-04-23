  import {prisma} from '../libs/prisma'
  
  //@ts-ignore
  export async function getUsuario(session) {
    if (session) {
        const usuario = await prisma.usuarios.findFirst({
          where: {
            id: Number(session.user.id)
          }


        });
        return usuario;
  
    } else {
      return false
    }
  }