import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Authentication } from "../Authentication/Authentication";

export const Hero = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(true);
  const onOpen=()=>setIsSignupOpen(true)
  return (
    <section className="relative h-[550px] bg-hero bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%]">
    <h1 className="text-4xl font-bold text-red-600 mb-4">Welcome to Wecode Malayalam</h1>
    <h3 className="text-lg font-medium text-white mb-6">Connect, Collaborate, Create</h3>
    <button onClick={onOpen} className=" bg-primary font-semibold w-max left- text-black gap-3 p-4   rounded-md bg-violet-400 transition-transform transform hover:scale-105 flex items-center sm:ml-[calc(2*30%)] ml-[20%]">
    <FontAwesomeIcon icon={faUsers} className="animate-bounce"/>
      Join Our Community
    </button>
    <Authentication  isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    
  </section>
  
  
  )
}
