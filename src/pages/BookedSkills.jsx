// src/pages/BookedSkills.jsx
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function BookedSkills() {
  const [bookedSkills, setBookedSkills] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      const booked = JSON.parse(localStorage.getItem("bookedSkills")) || [];
      setBookedSkills(booked);
    } else {
      setBookedSkills([]); // Not logged in, empty booked skills
    }
  }, []);

  const handleRemoveSkill = (skill) => {
    const updatedBooked = bookedSkills.filter((s) => s.skillId !== skill.skillId);
    setBookedSkills(updatedBooked);
    localStorage.setItem("bookedSkills", JSON.stringify(updatedBooked));
    toast.success(`"${skill.skillName}" removed from your booked skills!`);
  };

  return (
    <section className="bg-base-200 min-h-screen py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary">
        Booked Skills
      </h1>

      {bookedSkills.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">
          {auth.currentUser
            ? "You have no booked skills."
            : "No booked skills. Please login to book skills."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <p className="text-sm font-medium">Category: {skill.category}</p>

                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="btn btn-secondary mt-3 w-full text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
