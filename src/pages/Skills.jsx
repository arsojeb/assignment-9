import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import skillsData from "../data/skills";

export default function Skills() {
  const [availableSkills, setAvailableSkills] = useState([]);

  // Load available skills from localStorage or fallback to skillsData
  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("availableSkills"));
    if (storedSkills && storedSkills.length > 0) {
      setAvailableSkills(storedSkills);
    } else {
      setAvailableSkills(skillsData);
      localStorage.setItem("availableSkills", JSON.stringify(skillsData));
    }

    // Listen to localStorage changes (reactive update)
    const handleStorageChange = () => {
      const updatedSkills = JSON.parse(localStorage.getItem("availableSkills")) || skillsData;
      setAvailableSkills(updatedSkills);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-16 text-blue-500">
        All Skills
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {availableSkills.map((skill) => (
          <motion.div
            key={skill.skillId}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/50 dark:bg-gray-800/60 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-1"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-bold">{skill.skillName}</h3>
              <p className="text-sm opacity-80">
                {skill.category} • by {skill.providerName}
              </p>
              <div className="flex justify-between mt-3">
                <span className="font-semibold text-yellow-400">⭐ {skill.rating}</span>
                <span className="font-semibold text-blue-500">${skill.price}</span>
              </div>

              <Link
                to={`/skills/${skill.skillId}`}
                className="btn btn-primary w-full mt-5"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
