import { FaRegSmileBeam } from "react-icons/fa";

export default function Welecome() {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-indigo-400 min-h-screen flex justify-center items-center">
      <div className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-12 max-w-xl w-full border border-indigo-700">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <FaRegSmileBeam className="text-5xl text-indigo-500 animate-bounce" />
        </div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-blue-700 to-indigo-400 text-center mb-4">
          Welcome!
        </h2>
        <p className="text-lg text-indigo-900 text-center mb-6">
          Thank you for visiting my portfolio.<br />
          Explore my work, discover my passion for technology, application development.
        </p>
        <div className="flex justify-center">
          <span className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg font-semibold tracking-wide hover:bg-indigo-800 transition-colors">
            Let’s build something amazing together!
          </span>
        </div>
      </div>
    </div>
  );
}