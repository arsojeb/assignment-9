import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import skillsData from "../data/skills"; // Your skills JSON/fake data
import { getAuth } from "firebase/auth";
import { toast } from "react-hot-toast";

export default function SkillPage() {
  const { id } = useParams(); // Get skill id from URL
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const [skill, setSkill] = useState(null);

  useEffect(() => {
    // Find the skill in the data
    const foundSkill = skillsData.find((s) => s.skillId === parseInt(id));
    if (!foundSkill) {
      navigate("/"); // Redirect home if not found
      return;
    }
    setSkill(foundSkill);

    // If not logged in, redirect to login
    if (!user) {
      navigate(`/login?redirect=/skills/${id}`);
    }
  }, [id, navigate, user]);

  const handleBookSkill = () => {
    if (!user) {
      toast.error("You must be logged in to book a skill!");
      return;
    }

    // Get existing booked skills from localStorage
    const bookedSkills = JSON.parse(localStorage.getItem("bookedSkills")) || [];

    // Check if already booked
    if (bookedSkills.find((s) => s.skillId === skill.skillId)) {
      toast.error("You already booked this skill!");
      return;
    }

    bookedSkills.push(skill);
    localStorage.setItem("bookedSkills", JSON.stringify(bookedSkills));
    toast.success(`"${skill.skillName}" booked successfully!`);
  };

  if (!skill) return <p className="text-center mt-10">Loading skill...</p>;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skill Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Skill Details */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">{skill.skillName}</h1>
          <p>{skill.description}</p>
          <p><strong>Provider:</strong> {skill.providerName}</p>
          <p><strong>Category:</strong> {skill.category}</p>
          <p><strong>Price:</strong> ${skill.price}</p>
          <p><strong>Rating:</strong> ⭐ {skill.rating}</p>

          {/* Book Skill Button */}
          <button
            onClick={handleBookSkill}
            className="btn btn-primary w-full mt-4"
          >
            Book Skill
          </button>
        </div>
      </div>
    </div>
  );
}
