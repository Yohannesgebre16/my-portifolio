import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-orange-300 text-white/80 flex justify-center p-6 gap-8 rounded-b-2xl shadow-md sticky top-0 z-50">
      <Link to="/home" className="hover:text-white hover:underline transition">Home</Link>
      <Link to="/about" className="hover:text-white hover:underline transition">About</Link>
      <Link to="/contact" className="hover:text-white hover:underline transition">Contact</Link>
    </div>
  );
}