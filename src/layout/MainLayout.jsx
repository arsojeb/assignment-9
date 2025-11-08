import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-500">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
