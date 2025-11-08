import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect user to intended route after login
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!formData.email) {
      toast.error("Please enter your email to reset password!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      toast.success("Password reset email sent!");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to send reset email!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Google login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <Toaster />
      <div className="max-w-md w-full bg-base-200 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
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
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-blue-500 underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-warning w-full mb-4"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
