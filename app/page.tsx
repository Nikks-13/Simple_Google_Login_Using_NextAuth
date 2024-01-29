"use client"

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";


export default function Home() {


  const signInHandler=()=>{
    signIn('google',{callbackUrl:"/dashboard"})
  }
  return (
    <main className=" bg-blue-300 min-h-screen flex flex-col justify-center items-center  p-4">
      <Image src={"/logo.png"} alt="image" height={500} width={500}/>
      <button className=" text-3xl border-2 border-black rounded-md bg-red-500 p-2 text-white hover:bg-red-400 shadow-2xl" onClick={signInHandler}>
        <span>Log In With Google</span>
      </button>
      

      

      
    </main>
  );
}
