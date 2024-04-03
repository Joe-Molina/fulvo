import Image from "next/image";
import { ButtonSignIn } from "./components/buttonSignOut";

export default function Home() {


  return (
    <div className='flex justify-around shadow-lg rounded-md m-4 bg-neutral-900 h-[calc(100%-6rem)]  p-4 '>
    <div className='w-full flex flex-col p-4 items-center mt-20'>
      <img src="https://funlinafutsal.com/img/logo.png" alt="" className="w-52"/>
      <ButtonSignIn/>
    </div>
   </div>
  );
}
