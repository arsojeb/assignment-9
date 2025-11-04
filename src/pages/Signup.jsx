import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <section className="relative bg-base-200 min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-primary mb-2 text-center">Create Account ✨</h2>
        <p className="text-black mb-6 text-center">Sign up to join SkillSwap.</p>

        {error && <p className="text-red-500 bg-red-50 border border-red-200 rounded-lg py-2 px-3 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Mail className="text-black mr-2" size={20} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent focus:outline-none text-black"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Lock className="text-black mr-2" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent focus:outline-none text-black"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full text-lg font-semibold mt-2 flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 className="animate-spin" /> Signing up...</> : "Sign Up"}
          </button>
        </form>

        <div className="divider my-6">OR</div>

        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="btn w-full flex items-center justify-center gap-2 font-semibold border border-gray-300 hover:bg-gray-100 transition hover:text-black"
        >
          <FcGoogle size={20} /> Sign up with Google
        </button>

        <p className="mt-6 text-sm text-black text-center">
          Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Login</Link>
        </p>
      </div>
    </section>
  );
}
