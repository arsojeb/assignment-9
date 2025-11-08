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

  if (!user)
    return <p className="text-center mt-10 text-gray-500 dark:text-gray-300">Loading profile...</p>;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      // Prompt user for new values
      const newName = prompt("Enter new name", user.displayName) || user.displayName;
      const newPhoto = prompt("Enter new photo URL", user.photoURL) || user.photoURL;

      // Update Firebase profile
      await updateProfile(auth.currentUser, {
        displayName: newName,
        photoURL: newPhoto,
      });

      // Update local state to reflect changes immediately
      setUser({ ...auth.currentUser, displayName: newName, photoURL: newPhoto });

      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md text-center relative z-10">
        
        {/* User Avatar */}
        <img
          src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-2 border-primary dark:border-yellow-400 mb-4"
        />

        {/* User Name */}
        <h2 className="text-2xl font-bold text-primary dark:text-yellow-400 mb-2">
          {user.displayName || "User"}
        </h2>

        {/* User Email */}
        <p className="text-gray-700 dark:text-gray-200 mb-4">{user.email}</p>

        {/* Extra info */}
        <div className="space-y-2">
          {user.phoneNumber && <p>Phone: {user.phoneNumber}</p>}
          {user.metadata?.creationTime && (
            <p>Joined: {new Date(user.metadata.creationTime).toDateString()}</p>
          )}
        </div>

        {/* Update & Logout Buttons */}
        <button
          onClick={handleUpdateProfile}
          className="btn btn-primary w-full mt-6 hover:scale-105 transition-transform"
        >
          Update Profile
        </button>

        <button
          onClick={handleLogout}
          className="btn btn-error w-full mt-4 hover:scale-105 transition-transform"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
