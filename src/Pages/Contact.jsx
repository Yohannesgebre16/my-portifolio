import { FaTelegram, FaPhone, FaHeart } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-400">
      <div className="relative max-w-xl w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-indigo-800 transition-transform duration-300 hover:scale-105 hover:shadow-indigo-900">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <FaHeart className="text-pink-500 text-4xl animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold text-indigo-900 mb-4 text-center">
          Let’s Connect!
        </h2>
        <p className="text-lg text-indigo-900 mb-8 text-center">
          Ready to collaborate or have any questions? Reach out below.<br />
          I am always open to new opportunities and creative challenges.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://t.me/J022son"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaTelegram className="text-2xl" /> @J022son
          </a>
         
          <a
            href="tel:+251922777095"
            className="flex items-center gap-2 text-lg text-green-600 hover:text-green-800 transition-colors"
          >
            <FaPhone className="text-2xl" /> +251922777095
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:yohannesgebre390@gmail.com"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-800 transition-colors font-semibold"
          >
            Say Hello!
          </a>
        </div>
      </div>
    </div>
  );
}