import Typewriter from "typewriter-effect";
import React from "react";

export default function Welecome(){
  return(
    <div className="flex flex-col bg-amber-300 items-center justify-center  dark:bg-gray-900 text-center">

      <h1 className="text-4xl md:text-6xl text-gray-900 font-bold dark:text-white">Hi,I'm
        <span className="text-orange-500">Yohannes Gebre</span>
        
      </h1>
      <div className="text-2xl md:text-3xl text-gray-500 font-semibold dark:text-gray-300">
        <Typewriter
        className="text-shadow-red-400"
      options={{
        strings:[
          "MERN Stack Devloper",
          "Backend Enthusiast ",
          "MongoDB Explorer",
          "Learning Everyday",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
      }}
      
      
      />
    

      </div>
     
    </div>
  )
}