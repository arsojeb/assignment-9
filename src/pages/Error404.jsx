import { Link } from "react-router-dom";
import Error from "../assets/download (31).jpg"

export default function Error404() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
        <img src="" alt="" />
      <h1 className="text-6xl font-bold text-error">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}
