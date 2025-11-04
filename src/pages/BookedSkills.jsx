import { useState, useEffect } from "react";

export default function BookedSkills() {
  const [bookedSkills, setBookedSkills] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookedSkills")) || [];
    setBookedSkills(stored);
  }, []);

  const handleRemoveSkill = (skill) => {
    const updated = bookedSkills.filter((s) => s.skillId !== skill.skillId);
    localStorage.setItem("bookedSkills", JSON.stringify(updated));
    setBookedSkills(updated);
    alert(`${skill.skillName} removed. You can book it again in Skills page.`);
  };

  return (
    <section className="bg-base-200 min-h-screen py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary">
          Your Booked Skills
        </h1>

        {bookedSkills.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            No skills booked yet.
          </p>
        ) : (
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
                <div className="p-5 text-blue-600">
                  <h3 className="text-xl font-bold mb-2">{skill.skillName}</h3>
                  <p className="text-gray-700 mb-2">{skill.description}</p>
                  <p className="text-sm font-medium">Provider: {skill.providerName}</p>
                  <p className="text-sm font-medium">Price: ${skill.price}</p>
                  <p className="text-sm font-medium">Category: {skill.category}</p>
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="btn btn-secondary mt-3 w-full text-sm"
                  >
                    Remove Skill
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
