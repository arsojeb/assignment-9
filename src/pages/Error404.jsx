import { Link } from "react-router-dom";
import ErrorImage from "../assets/download (31).jpg";

export default function Error404() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 px-6 text-center">
      <h1 className="text-6xl font-bold text-error mb-2">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}
