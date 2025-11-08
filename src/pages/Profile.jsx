import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) setUser(currentUser);
      else navigate("/login"); // redirect if not logged in
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(user, {
        displayName: prompt("Enter new name", user.displayName) || user.displayName,
        photoURL: prompt("Enter new photo URL", user.photoURL) || user.photoURL,
      });
      toast.success("Profile updated!");
      setUser({ ...auth.currentUser });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <img
          src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-2 border-primary dark:border-yellow-400 mb-4"
        />
        <h2 className="text-2xl font-bold text-primary dark:text-yellow-400 mb-2">
          {user.displayName || "User"}
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">{user.email}</p>
        <button
          onClick={handleUpdateProfile}
          className="btn btn-primary w-full mb-2"
        >
          Update Profile
        </button>
        <button
          onClick={handleLogout}
          className="btn btn-error w-full mt-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
