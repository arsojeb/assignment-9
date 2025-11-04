import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function BookedSkills() {
  const [bookedSkills, setBookedSkills] = useState([]);

  // Load booked skills from localStorage
  useEffect(() => {
    const booked = JSON.parse(localStorage.getItem("bookedSkills")) || [];
    setBookedSkills(booked);
  }, []);

  // Remove skill
  const handleRemoveSkill = (skill) => {
    const updatedBooked = bookedSkills.filter(s => s.skillId !== skill.skillId);
    setBookedSkills(updatedBooked);
    localStorage.setItem("bookedSkills", JSON.stringify(updatedBooked));

    // Add back to skill page storage
    const skillPageSkills = JSON.parse(localStorage.getItem("skillPageSkills")) || [];
    localStorage.setItem("skillPageSkills", JSON.stringify([...skillPageSkills, skill]));

    toast.success(`"${skill.skillName}" removed successfully!`);
  };

  if (bookedSkills.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-200 text-center px-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">No Booked Skills 😢</h2>
          <Link to="/skills" className="btn btn-primary">
            Explore Skills
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-base-200 min-h-screen py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary">
          Your Booked Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bookedSkills.map((skill) => (
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
                  onClick={() => handleRemoveSkill(skill)}
                  className="btn btn-outline mt-3 w-full text-sm text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
