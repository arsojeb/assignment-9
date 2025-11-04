import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white p-10 overflow-hidden">
      {/* Floating Gradient Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6">
        {/* Brand */}
        <aside className="flex flex-col items-start">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-blue-500 hover:scale-105 transition-transform"
          >
            SkillSwap
          </Link>
          <p className="text-sm mt-2 text-white">Empowering local skill sharing and learning.</p>
        </aside>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition text-white ">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition text-white">About</Link>
          <Link to="/services" className="hover:text-blue-400 transition text-white">Services</Link>
          <Link to="/booked-skills" className="hover:text-blue-400 transition text-white">Booked Skill</Link>
          <Link to="/skills" className="hover:text-blue-400 transition text-white">Skill</Link>
        </nav>

        {/* Social Icons */}
        <nav className="flex gap-6 ">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook className="w-5 h-5 hover:text-purple-400 transition-transform hover:scale-110" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter className="w-5 h-5 hover:text-purple-400 transition-transform hover:scale-110" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram className="w-5 h-5 hover:text-purple-400 transition-transform hover:scale-110" />
          </a>
          <a href="https://github.com/arsojeb" target="_blank" rel="noreferrer" aria-label="Github">
            <FaGithub className="w-5 h-5 hover:text-purple-400 transition-transform hover:scale-110" />
          </a>
        </nav>

        {/* Copyright */}
        <aside className="text-sm text-white">
          <p>© 2025 SkillSwap. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
}
