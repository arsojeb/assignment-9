import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-gray-100 relative overflow-hidden pt-16 pb-8 mt-12">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-6">
        {/* Brand Section */}
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-3xl font-bold text-white">
            SkillSwap
          </Link>
          <p className="text-sm opacity-80">
            Empowering local skill sharing and learning.
          </p>
          <p className="text-sm opacity-60">support@skillswap.com</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link to="/privacy" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://github.com/arsojeb" target="_blank" rel="noreferrer" className="hover:text-gray-200 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        © 2025 SkillSwap. All rights reserved.
      </div>
    </footer>
  );
}
