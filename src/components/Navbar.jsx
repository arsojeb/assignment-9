import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const navigate = useNavigate();

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle dark/light theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="navbar bg-base-200 dark:bg-gray-900 px-6 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-primary">
          SkillSwap
        </Link>
      </div>

      <div className="flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}
        >
          About
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}
        >
          Skills
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}
        >
          Services
        </NavLink>

        {user && (
          <NavLink
            to="/profile"
            className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}
          >
            My Profile
          </NavLink>
        )}

        {/* Theme toggle */}
        <button onClick={toggleTheme} className="btn btn-ghost text-xl">
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Auth buttons */}
        {!user ? (
          <>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-secondary">
              Sign Up
            </Link>
          </>
        ) : (
          <div className="relative group">
            <img
              src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="avatar"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
              title={user.displayName || user.email}
            />
            <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-base-100 dark:bg-gray-800 shadow-lg rounded-lg p-2">
              <p className="px-4 py-1 text-sm">{user.displayName || "User"}</p>
              <button onClick={handleLogout} className="btn btn-sm btn-error mt-1">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
