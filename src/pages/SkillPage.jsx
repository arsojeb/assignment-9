import { useState, useEffect } from "react";
import skillsDataOriginal from "../data/skills"; // original skill data
import { Link } from "react-router-dom";

export default function SkillPage() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const bookedSkills = JSON.parse(localStorage.getItem("bookedSkills")) || [];
    // Filter out booked skills
    const availableSkills = skillsDataOriginal.filter(
      (skill) => !bookedSkills.find((b) => b.skillId === skill.skillId)
    );
    setSkills(availableSkills);
  }, []);

  const handleBookSkill = (skill) => {
    // Save to localStorage
    const bookedSkills = JSON.parse(localStorage.getItem("bookedSkills")) || [];
    bookedSkills.push(skill);
    localStorage.setItem("bookedSkills", JSON.stringify(bookedSkills));

    // Remove from current page
    setSkills((prev) => prev.filter((s) => s.skillId !== skill.skillId));
  };

  return (
    <section className="bg-base-200 min-h-screen py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary">
          Explore Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.skillId}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-blue-600">
                <h3 className="text-xl font-bold mb-2">{skill.skillName}</h3>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <p className="text-sm font-medium">Provider: {skill.providerName}</p>
                <p className="text-sm font-medium">Price: ${skill.price}</p>
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
          {skills.length === 0 && (
            <p className="text-center text-lg text-gray-600 col-span-full">
              All skills are booked! Check your booked skills.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}