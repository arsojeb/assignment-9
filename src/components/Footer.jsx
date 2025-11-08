import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-gray-900 dark:text-white pt-6 pb-6 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6">
        {/* Brand Section */}
        <div className="flex flex-col gap-1">
          <Link to="/" className="text-2xl font-bold text-primary dark:text-yellow-400">
            SkillSwap
          </Link>
          <p className="text-sm opacity-80">Empowering local skill sharing and learning.</p>
          <p className="text-sm opacity-60">support@skillswap.com</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
          <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://github.com/arsojeb" target="_blank" rel="noreferrer" className="hover:text-gray-700 dark:hover:text-yellow-400 transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs opacity-60">
        © 2025 SkillSwap. All rights reserved.
      </div>
    </footer>
  );
}
