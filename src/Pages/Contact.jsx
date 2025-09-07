import { FaTelegram, FaPhone, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="relative max-w-xl w-full bg-white/40 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-indigo-800 transition-transform duration-300"
      >
     
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <FaHeart className="text-pink-500 text-4xl animate-bounce" />
        </div>

        <h2 className="text-3xl font-bold text-indigo-900 dark:text-white mb-4 text-center">
          Let's Connect!
        </h2>
        <p className="text-lg text-indigo-900 dark:text-gray-300 mb-8 text-center">
          Ready to collaborate or have any questions? Reach out below. <br />
          I am always open to new opportunities and creative challenges.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://t.me/J022son"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaTelegram className="text-2xl" /> @J022son
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="tel:+251922777095"
            className="flex items-center gap-2 text-lg text-green-600 hover:text-green-800 transition-colors"
          >
            <FaPhone className="text-2xl" /> +251922777095
          </motion.a>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:yohannesgebre390@gmail.com"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-800 transition-colors font-semibold"
          >
            Say Hello!
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
