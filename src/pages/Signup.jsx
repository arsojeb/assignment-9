import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "password") setPasswordError(""); // reset password error on change
  };

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) return "Password must have at least one uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must have at least one lowercase letter.";
    if (password.length < 6) return "Password must be at least 6 characters long.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const passError = validatePassword(formData.password);
    if (passError) {
      setPasswordError(passError);
      setLoading(false);
      return;
    }

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Update profile
      await updateProfile(userCredential.user, {
        displayName: formData.name,
        photoURL: formData.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      });

      toast.success("Signup successful!");
      navigate("/"); // Navigate to Home
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <Toaster />
      <div className="max-w-md w-full bg-base-200 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Optional"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
