// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); // Redirect if not logged in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!user) return null; // Wait until user info loads

  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center relative z-10">
        <img
          src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold text-primary mb-2">
          {user.displayName || "User"}
        </h2>
        <p className="text-gray-700 mb-4">{user.email}</p>

        <div className="space-y-2">
          {user.phoneNumber && <p>Phone: {user.phoneNumber}</p>}
          {user.metadata?.creationTime && (
            <p>Joined: {new Date(user.metadata.creationTime).toDateString()}</p>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-primary w-full mt-6 hover:scale-105 transition-transform"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
