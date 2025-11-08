export default function About() {
  return (
    <section className="relative bg-base-200 dark:bg-gray-900 py-20 px-6 md:px-12 text-center overflow-hidden transition-colors duration-500">
      {/* Floating Gradient Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-primary dark:text-blue-400">
          About <span className="text-secondary dark:text-yellow-400">SkillSwap</span>
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          SkillSwap is a vibrant platform where individuals can share, teach, and learn skills from their local
          community. Whether you’re a passionate artist, a fitness enthusiast, or a tech learner — SkillSwap helps
          you connect, grow, and exchange knowledge effortlessly.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card bg-white dark:bg-gray-800 shadow-lg p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2 text-primary dark:text-blue-400">🎯 Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower communities by connecting people through shared learning experiences.
            </p>
          </div>

          <div className="card bg-white dark:bg-gray-800 shadow-lg p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2 text-primary dark:text-blue-400">🚀 Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To become the most trusted platform for personal growth and skill exchange worldwide.
            </p>
          </div>

          <div className="card bg-white dark:bg-gray-800 shadow-lg p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2 text-primary dark:text-blue-400">🤝 Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Collaboration, inclusivity, and lifelong learning are the foundations of everything we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
