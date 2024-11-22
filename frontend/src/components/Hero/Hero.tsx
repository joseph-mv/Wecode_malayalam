import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from '@fortawesome/free-solid-svg-icons'; 1    

export const Hero = () => {
  return (
    <section className="relative h-[450px] bg-hero bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%]">
    <h1 className="text-4xl font-bold text-red-600 mb-4">Welcome to Wecode Malayalam</h1>
    <h3 className="text-lg font-medium text-white mb-6">Connect, Collaborate, Create</h3>
    <button className=" bg-primary font-semibold w-max left- text-black gap-3 p-4 outline-red-600 outline-dashed outline-3 -outline-offset-4  rounded-md bg-yellow-400 transition-transform transform hover:scale-105 flex items-center sm:ml-[calc(2*30%)] ml-[20%]">
    <FontAwesomeIcon icon={faUsers} className="animate-bounce"/>
      Join Our Community
    </button>
  </section>
  
  
  )
}
