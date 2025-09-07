import { 
  SiReact, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb 
} from 'react-icons/si';
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
    { icon: <SiExpress className="text-gray-700" />, label: "Express.js" },
    { icon: <SiNodedotjs className="text-green-500" />, label: "Node.js" },
    { icon: <SiHtml5 className="text-orange-600" />, label: "HTML5" },
    { icon: <SiCss3 className="text-blue-600" />, label: "CSS3" },
    { icon: <SiReact className="text-blue-500" />, label: "React" },
    { icon: <SiTailwindcss className="text-blue-400" />, label: "TailwindCSS" },
    { icon: <SiJavascript className="text-yellow-500" />, label: "JavaScript" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500 px-6">
      
    
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-2xl text-center text-gray-600 dark:text-gray-300 mb-10">
        I'm a MERN stack developer passionate about building scalable web apps, 
        crafting smooth user experiences, and working with modern tools like 
        React, Tailwind, and Node.js. Here's my core tech expertise:
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.15 }}
            className="flex flex-col items-center space-y-2 p-4 rounded-2xl shadow-md dark:shadow-lg bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
          >
            <div className="text-6xl">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
