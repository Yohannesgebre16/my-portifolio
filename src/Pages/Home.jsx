import React from 'react'
import { Link } from "react-scroll"

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500 px-6">
      
      <div className="max-w-2xl w-full bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-2xl
        p-10 border border-gray-200 dark:border-gray-700 transition-colors duration-500">
        
        <h1 className="text-4xl font-bold mb-4 drop-shadow-sm">
          Hello, I am <span className="text-indigo-600 dark:text-indigo-400">Yohannes Gebre</span>
        </h1>
        
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          A passionate web developer specialized in frontend
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          I specialize in building modern, responsive websites for small and 
          medium businesses. Welcome to my portfolio — explore my work!
        </p>

        <div className="flex space-x-4">
          <Link to="projects" smooth duration={500} offset={-70}
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg px-5 py-3 transition">
            View Projects
          </Link>
          
          <Link to="contact" smooth duration={500} offset={-70}
            className="cursor-pointer border border-indigo-600 text-indigo-600 
              hover:bg-indigo-600 hover:text-white rounded-lg px-5 py-3 transition">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
