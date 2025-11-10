import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import skillsData from "../data/skills";

export default function SkillPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [user, setUser] = useState(auth.currentUser);
  const [showModal, setShowModal] = useState(false);

  // Load skill from availableSkills or original skillsData
  useEffect(() => {
    const availableSkills = JSON.parse(localStorage.getItem("availableSkills")) || skillsData;
    const selectedSkill = availableSkills.find((s) => s.skillId === parseInt(id));
    setSkill(selectedSkill);
  }, [id]);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => setUser(currentUser));
    return () => unsubscribe();
  }, []);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-700 dark:text-gray-300">
        Skill not found or already booked.
      </div>
    );
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to book a session!"); // fallback
      return;
    }

    if (!formData.name || !formData.email) {
      alert("Please fill out all fields!"); // fallback
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem("bookedSkills")) || [];

    const newBooking = {
      skillId: skill.skillId,
      skillName: skill.skillName,
      description: skill.description,
      image: skill.image,
      providerName: skill.providerName,
      price: skill.price,
      rating: skill.rating,
      category: skill.category,
      bookedBy: formData.name,
      bookedEmail: formData.email,
      userId: user.uid,
    };

    // Save booked skill
    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem("bookedSkills", JSON.stringify(updatedBookings));

    // Remove booked skill from availableSkills
    const availableSkills = JSON.parse(localStorage.getItem("availableSkills")) || skillsData;
    const remainingSkills = availableSkills.filter((s) => s.skillId !== skill.skillId);
    localStorage.setItem("availableSkills", JSON.stringify(remainingSkills));

    // Clear form
    setFormData({ name: "", email: "" });

    // Show modal
    setShowModal(true);
  };

  return (
    <section className="min-h-screen bg-base-200 dark:bg-gray-900 py-20 px-6 transition-all duration-500">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <img src={skill.image} alt={skill.skillName} className="w-full h-full object-cover" />

        <div className="p-8 text-gray-900 dark:text-gray-100">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-yellow-400 mb-4">
            {skill.skillName}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{skill.description}</p>

          <ul className="mb-6 space-y-1">
            <li><strong>Provider:</strong> {skill.providerName}</li>
            <li><strong>Price:</strong> ${skill.price}</li>
            <li><strong>Rating:</strong> ⭐ {skill.rating}</li>
            <li><strong>Category:</strong> {skill.category}</li>
          </ul>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Book Session</h2>

            {!user ? (
              <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-xl text-center font-medium">
                Please login to submit the booking form.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-base-100 dark:bg-gray-700 p-6 rounded-xl shadow-inner"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input input-bordered w-full bg-white dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full bg-white dark:bg-gray-800"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-4">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Success!</h2>
            <p className="mb-6">
              <strong>{skill.skillName}</strong> has been booked successfully 🎉
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setShowModal(false);
                navigate("/booked-skills");
              }}
            >
              Go to Booked Skills
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
