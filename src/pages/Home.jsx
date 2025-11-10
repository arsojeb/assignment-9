import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import skillsData from "../data/skills";

export default function Home() {
  const heroSlides = [
    { title: "Learn. Share. Grow.", 
      desc: "Discover skills from passionate people around the world.", 
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" },
    { title: "Teach What You Love.", desc: "Turn your passion into opportunity by sharing your skills.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80" },
    { title: "Find Local Experts.", desc: "Collaborate, connect, and build something amazing together.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80" },
  ];
  
  const howItWorks = [
    { step: "1", title: "Browse Skills", desc: "Explore thousands of skills offered near you.", gradient: "from-blue-500 to-indigo-600" },
    { step: "2", title: "Book & Connect", desc: "Schedule sessions that match your time.", gradient: "from-purple-500 to-pink-500" },
    { step: "3", title: "Learn & Grow", desc: "Start learning and improving continuously.", gradient: "from-yellow-400 to-orange-500" },
  ];

  const testimonials = [
    { name: "Alice W.", feedback: "This platform helped me grow fast!", img: "https://i.pravatar.cc/150?img=24" },
    { name: "John D.", feedback: "Found an amazing mentor easily!", img: "https://i.pravatar.cc/150?img=33" },
    { name: "Maya S.", feedback: "Smooth experience and great teachers!", img: "https://i.pravatar.cc/150?img=37" },
  ];

  return (
    <div className="bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500">

      {/* HERO SECTION */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="w-full h-[75vh]"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-[75vh] flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${slide.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="relative z-10 max-w-2xl px-6">
                  <motion.h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>{slide.title}</motion.h1>
                  <motion.p className="text-lg md:text-xl text-white mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>{slide.desc}</motion.p>
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
                    <Link to="/skills" className="btn btn-warning font-semibold text-black hover:scale-105 transition">Explore Skills</Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

{/* POPULAR SKILLS */}
<section className="max-w-6xl mx-auto py-20 px-6 text-center">
  <h2 className="text-4xl font-bold mb-12 text-blue-500">Popular Skills</h2>

  {/* Show only first 6 skills */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {skillsData.slice(0, 6).map((skill) => (
      <motion.div
        key={skill.skillId}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white/50 dark:bg-gray-800/60 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
      >
        <img src={skill.image} alt={skill.skillName} className="h-48 w-full object-cover" />
        <div className="p-5 text-left">
          <h3 className="text-xl font-bold">{skill.skillName}</h3>
          <p className="text-sm opacity-80">{skill.category} • by {skill.providerName}</p>
          <div className="flex justify-between mt-3">
            <span className="font-bold text-yellow-400">⭐ {skill.rating}</span>
            <span className="font-bold text-blue-500">${skill.price}</span>
          </div>
          <Link to={`/skills/${skill.skillId}`} className="btn btn-primary w-full mt-5">
            View Details
          </Link>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Explore More Button */}
  <div className="mt-10 text-center">
    <Link to="/skills" className="btn btn-outline btn-accent text-lg">
      Explore More
    </Link>
  </div>
</section>


      {/* TOP PROVIDERS */}
      {/* 🌟 Top Rated Providers Section */}
<section className="bg-base-200 dark:bg-gray-900 py-20 px-6 transition-colors duration-500">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary dark:text-yellow-400">
    🌟 Top Rated Providers
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {[...skillsData]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4)
      .map((provider) => (
        <div
          key={provider.skillId}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <img
            src={provider.image}
            alt={provider.providerName}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 text-gray-900 dark:text-gray-100 text-center">
            <h3 className="text-xl font-bold mb-1 text-blue-600 dark:text-yellow-400">
              {provider.providerName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {provider.skillName}
            </p>
            <div className="text-yellow-500 font-semibold mb-2">
              ⭐ {provider.rating}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
              {provider.slotsAvailable} Slots Available
            </p>
            <Link
              to={`/skills/${provider.skillId}`}
              className="btn btn-primary w-full text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="bg-base-200 dark:bg-gray-800 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-500">What Students Say</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              className="bg-base-100 dark:bg-gray-900 p-6 w-80 rounded-2xl shadow-xl hover:-translate-y-1 transition">
              <img src={t.img} alt={t.name} className="w-16 h-16 mx-auto rounded-full border-2 border-green-500 mb-4" />
              <h3 className="font-bold">{t.name}</h3>
              <p className="opacity-80 mt-2">"{t.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
