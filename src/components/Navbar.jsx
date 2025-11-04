import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/booked-skills", label: "Booked Skills" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    
  ];

  // Listen for auth changes
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
    <div className="navbar bg-base-200 px-6 shadow-md relative z-50">
      {/* Left: Brand */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-xl hover:text-2xl font-extrabold text-white hover:text-primary hover:scale-105 transition-transform"
        >
          SkillSwap
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-medium ${isActive ? "text-primary underline" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        {!user ? (
          <>
            <Link to="/login" className="btn btn-primary ml-4 hover:scale-105 transition">
              Login
            </Link>
            <Link to="/signup" className="btn btn-secondary ml-2 hover:scale-105 transition">
              Sign Up
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end ml-4">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="User Avatar"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1000 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost btn-square"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-200 z-1000 shadow-lg md:hidden">
          <ul className="menu p-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block font-medium ${isActive ? "text-primary underline" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-primary w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="btn btn-secondary w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile" onClick={() => setMenuOpen(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
