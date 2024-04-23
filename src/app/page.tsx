
import { loginIsRequiredServer } from "./api/auth/[...nextauth]/route";
import { Equipos } from "./components/Equipos";
import { getUsuario } from "./services/Getsuario";


export default async function Home() {

  const session = await loginIsRequiredServer();

  const admin = await getUsuario(session)

  //@ts-ignore
  const esAdmin = (admin.tipo_usuario == 'admin') ? true : false

  return (
    <div className={`flex justify-around shadow-lg rounded-md m-4  h-[calc(100%-6rem)]  p-4   ${esAdmin ? ' bg-neutral-900 ' : ' bg-neutral-100'} `} >
      <div className='w-full flex flex-col p-4 '>
        <div className="w-full flex flex-col p-4">
          <Equipos admin={admin} />
        </div>
      </div>
    </ div>
  );
}
