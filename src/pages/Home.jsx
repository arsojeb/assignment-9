import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen py-24 px-6 text-white overflow-hidden transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-300">
          Welcome to SkillSwap 🚀
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
          We craft beautiful, scalable, and intelligent digital experiences for forward-thinking startups and businesses.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/skills" className="btn btn-warning text-lg text-black font-semibold">
            Explore Skills
          </Link>
          <Link
            to="/about"
            className="btn btn-outline text-lg text-white border-white hover:bg-white hover:text-blue-600"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative Floating Gradient Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
}
