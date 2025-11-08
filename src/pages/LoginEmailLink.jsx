import { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import actionCodeSettings from "../utils/actionCodeSettings";

export default function LoginEmailLink() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendLink = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("✅ Sign-in link sent! Check your email inbox.");
    } catch (error) {
      console.error(error);
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 dark:bg-gray-900 transition-colors duration-500 px-4">
      <form
        onSubmit={handleSendLink}
        className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary dark:text-yellow-400 text-center">
          Login via Email Link
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full bg-transparent dark:text-gray-100 dark:border-gray-600"
          required
        />

        <button className="btn btn-primary w-full">Send Sign-in Link</button>

        {message && (
          <p className="text-sm text-center text-gray-700 dark:text-gray-200 mt-3">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
