import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import skillsDataRaw from "../data/skills"; // your array of skills

export default function SkillPage() {
  const [skillsData, setSkillsData] = useState([]);
  const [bookedSkills, setBookedSkills] = useState([]);

  // Load skills and booked skills from localStorage
  useEffect(() => {
    setSkillsData(skillsDataRaw);

    const booked = JSON.parse(localStorage.getItem("bookedSkills")) || [];
    setBookedSkills(booked);
  }, []);

  // Book skill function
  const handleBookSkill = (skill) => {
    if (!auth.currentUser) {
      toast.error("Please login to book a skill! 🚀");
      return;
    }

    // Add skill to bookedSkills
    const updatedBooked = [...bookedSkills, skill];
    setBookedSkills(updatedBooked);
    localStorage.setItem("bookedSkills", JSON.stringify(updatedBooked));

    // Remove skill from available skills
    const remainingSkills = skillsData.filter((s) => s.skillId !== skill.skillId);
    setSkillsData(remainingSkills);

    toast.success(`You booked "${skill.skillName}" successfully! 🎉`);
  };

  return (
    <section className="bg-base-200 min-h-screen py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary">
          Explore Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.skillId}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-black">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{skill.skillName}</h3>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <p className="text-sm font-medium">Provider: {skill.providerName}</p>
                <p className="text-sm font-medium">Price: ${skill.price}</p>
                <p className="text-sm font-medium">Rating: {skill.rating} ⭐</p>
                <p className="text-sm font-medium">Slots: {skill.slotsAvailable}</p>
                <p className="text-sm font-medium">Category: {skill.category}</p>

                <button
                  onClick={() => handleBookSkill(skill)}
                  className="btn btn-primary mt-3 w-full text-sm"
                >
                  Book Skill
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}
