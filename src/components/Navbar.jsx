import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="bg-base-200 dark:bg-gray-900 px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          SkillSwap
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}>Skills</NavLink>
          <NavLink to="/booked-skills" className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}>Booked Skills</NavLink>
          <NavLink to="/about" className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}>About</NavLink>
          {user && <NavLink to="/profile" className={({ isActive }) => `font-medium ${isActive ? "text-blue-500 underline" : ""}`}>My Profile</NavLink>}

          {!user ? (
            <>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
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
                <button onClick={handleLogout} className="btn btn-sm btn-error mt-1">Logout</button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-3 bg-base-200 dark:bg-gray-900">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="font-medium">Home</NavLink>
          <NavLink to="/skills" onClick={() => setMenuOpen(false)} className="font-medium">Skills</NavLink>
          <NavLink to="/booked-skills" onClick={() => setMenuOpen(false)} className="font-medium">Booked Skills</NavLink>
          {user && <NavLink to="/profile" onClick={() => setMenuOpen(false)} className="font-medium">My Profile</NavLink>}

          {!user ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="btn btn-primary w-full">Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="btn btn-secondary w-full">Sign Up</Link>
            </>
          ) : (
            <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="btn btn-error w-full">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
}
