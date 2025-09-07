import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, [isDark]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="bg-orange-300 dark:bg-gray-900 dark:text-gray-100 text-white/80 flex justify-center p-6 gap-8 rounded-b-2xl shadow-md sticky top-0 z-50 transition-colors duration-500">
      <Link to="home" smooth={true} duration={500} offset={-70}
        className="cursor-pointer hover:text-white hover:underline transition">
        Home
      </Link>
      <Link to="about" smooth={true} duration={500} offset={-70}
        className="cursor-pointer hover:text-white hover:underline transition">
        About
      </Link>
      <Link to="contact" smooth={true} duration={500} offset={-70}
        className="cursor-pointer hover:text-white hover:underline transition">
        Contact
      </Link>

      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode} className="ml-6 text-xl justify-end">
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}
