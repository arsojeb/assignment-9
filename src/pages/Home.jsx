import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import skillsData from "../data/skills";

export default function Home() {
  const heroSlides = [
    {
      title: "Learn. Share. Grow.",
      desc: "Discover skills from passionate people around the world.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "Teach What You Love.",
      desc: "Turn your passion into opportunity by sharing your skills.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "Find Local Experts.",
      desc: "Collaborate, connect, and build something amazing together.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=60",
    },
  ];

  const topProviders = [
    {
      name: "Sarah Johnson",
      skill: "UI/UX Design",
      rating: 4.9,
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "David Kim",
      skill: "Web Development",
      rating: 4.8,
      img: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Maria Lopez",
      skill: "Photography",
      rating: 4.7,
      img: "https://img.freepik.com/free-photo/portrait-smiling-young-man_1268-21877.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Browse Skills",
      desc: "Explore thousands of skills offered by people near you.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      step: "2",
      title: "Book & Connect",
      desc: "Contact providers and schedule sessions that fit your time.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "3",
      title: "Learn & Grow",
      desc: "Start learning, share your feedback, and keep improving.",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Alice W.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5wEk9NDXVRY9kYNehvBq9gAAReTy5HuBTQ&s",
      feedback: "I booked a coding class and my skills improved drastically. Highly recommended!",
    },
    {
      name: "John D.",
      img: "https://m.media-amazon.com/images/M/MV5BODk3OWIyY2MtM2E0MS00OWYyLTlkNDktMzY4MTE1MDhiYzBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      feedback: "Amazing platform! Found a great photographer to teach me photography tips.",
    },
    {
      name: "Maya S.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mr._Bean_2007.jpg/330px-Mr._Bean_2007.jpg",
      feedback: "Very easy to use and connect with skilled professionals locally.",
    },
  ];

  return (
    <div className="bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">

      {/* Hero Slider */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="w-full h-[75vh]"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative w-full h-[75vh] flex items-center justify-center text-center"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 px-4">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-white">{slide.desc}</p>
                  <Link
                    to="/skills"
                    className="btn btn-warning text-black font-semibold"
                  >
                    Explore Skills
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popular Skills */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-500">
          Popular Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.skillId}
              className="card bg-base-200 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
            >
              <figure>
                <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body text-left">
                <h3 className="text-xl font-bold">{skill.skillName}</h3>
                <p className="text-sm opacity-80">
                  {skill.category} • by {skill.providerName}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-semibold text-yellow-400">
                    ⭐ {skill.rating}
                  </span>
                  <span className="font-semibold text-blue-500">${skill.price}</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/skills/${skill.skillId}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Providers */}
      <section className="bg-base-200 dark:bg-gray-800 py-16 text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">
          Top Rated Providers
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {topProviders.map((p, idx) => (
            <div
              key={idx}
              className="bg-base-100 dark:bg-gray-900 shadow-md rounded-xl p-6 w-64 hover:shadow-xl transition-transform hover:scale-105"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-yellow-400"
              />
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm opacity-80 mb-2">{p.skill}</p>
              <span className="text-yellow-400 font-semibold">
                ⭐ {p.rating}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-lg bg-gradient-to-r ${item.gradient} text-white`}
            >
              <div className="text-4xl font-bold mb-4">Step {item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section: Student Testimonials */}
      <section className="bg-base-200 dark:bg-gray-800 py-16 text-center">
        <h2 className="text-4xl font-bold mb-10 text-green-500">
          What Students Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-base-100 dark:bg-gray-900 shadow-md rounded-xl p-6 w-80 hover:shadow-xl transition-transform hover:scale-105"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-green-500"
              />
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-sm opacity-80 mt-2">"{t.feedback}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
