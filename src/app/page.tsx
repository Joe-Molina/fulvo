import Image from "next/image";
import { ButtonSignIn } from "./components/buttonSignOut";
import { Equipos } from "./components/Equipos";

export default function Home() {


  return (
    <div className='flex justify-around shadow-lg rounded-md m-4 bg-neutral-900 h-[calc(100%-6rem)]  p-4 '>
    <div className='w-full flex flex-col p-4 '>
      <div className="w-full flex flex-col p-4">
          <Equipos/>
      </div>
    </div>
   </div>
  );
}
