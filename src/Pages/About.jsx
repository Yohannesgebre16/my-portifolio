import { FaUserTie, FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-blue-400 to-indigo-400 min-h-screen flex justify-center items-center px-2">
      <div className="w-full max-w-xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 border border-indigo-800 hover:scale-105 hover:shadow-indigo-900 transition-transform duration-300">
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="bg-indigo-600 rounded-full p-3 sm:p-4 shadow-lg mb-2 animate-bounce">
            <FaUserTie className="text-white text-3xl sm:text-4xl" />
          </div>
          <h2 className="text-indigo-700 text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-1 sm:mb-2 drop-shadow-2xl">
            About Me
          </h2>
          <span className="text-indigo-900 font-semibold text-base sm:text-lg text-center animate-pulse">
            Passionate Developer & Creative Problem Solver
          </span>
        </div>
        <div className="text-gray-800 leading-relaxed mb-6 sm:mb-8 text-center">
          <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
            Hi! I’m <span className="text-indigo-700 font-bold">Yohannes Gebre</span>, a developer who loves crafting <span className="bg-indigo-100 px-1 rounded">clean</span> and <span className="bg-indigo-100 px-1 rounded">robust</span> code.
          </p>
          <p className="mb-3 sm:mb-4">
            My expertise technologies are <span className="font-semibold text-indigo-700">HTML, CSS, JavaScript, Bootstrap, jQuery, React.js, Node.js (Express), and Tailwind CSS</span>. I thrive on turning ideas into impactful digital products with a focus on <span className="font-semibold text-indigo-700">user experience</span> and <span className="font-semibold text-indigo-700">beautiful interfaces</span>.
          </p>
          <p className="mb-3 sm:mb-4">
            I’m a strong communicator, a team player, and I adapt quickly to new environments, challenges, and technologies.
          </p>
          <div className="text-black font-medium mt-4 sm:mt-6 hover:underline cursor-pointer transition">
            Let’s build something fabulous together!
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="yohannesgebre390@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow-lg hover:bg-indigo-800 transition-colors font-semibold text-sm sm:text-base"
          >
            Hire Me <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}