import { useEffect, useState } from "react";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export default function FinishSignIn() {
  const [status, setStatus] = useState("Verifying your email link...");

  useEffect(() => {
    const auth = getAuth();

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");

      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          setStatus("✅ Sign-in successful! Redirecting...");

          // Redirect user to home (or dashboard)
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        })
        .catch((error) => {
          console.error("Sign-in failed:", error);
          setStatus(`❌ Error: ${error.message}`);
        });
    } else {
      setStatus("⚠️ Invalid sign-in link or already used.");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 dark:bg-gray-900 transition-colors duration-500 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-primary dark:text-yellow-400 mb-4">
          Email Link Sign-In
        </h1>
        <p className="text-gray-700 dark:text-gray-200">{status}</p>
      </div>
    </div>
  );
}
