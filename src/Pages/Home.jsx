import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br
    from-blue-400 to-indigo-400'>
         <div className='max-w-xl w-full bg-white/30 rounded-3xl shadow-2xl
          p-10 border border-indigo-800 hover:scale-105 hover:shadow-indigo-900
         transition-colors  duration-400'>
            <h1 className='text-4xl font-bold text-indigo-700 mb-4 drop-shadow-2xl '>Hello,Iam  
                <span className='text-indigo-500'> Yohannes Gebre</span>
            </h1>
            <h2 className='text-xl font-semibold text-gray-700 mb-6 animate-pulse'>A passionate web developer specialized in frontend </h2>
            <p className='text-gray-600 mb-8 leading-relaxed'>I specialized in building modern,responsive websites for small and 
                medium businesses.Welecome to my portifolio-website explore my work! 
            </p>
            <Link className='inline-block px-6 py-3 bg-indigo-600 text-white font-semibold
            rounded-xl shadow-md hover:bg-indigo-900 hover:brightness-125 duration-300' to="/contact">Let's connect</Link>
         </div>
    </div>
  )
}

export default Home;