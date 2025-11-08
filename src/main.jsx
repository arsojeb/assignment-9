import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout & Pages
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BookedSkills from "./pages/BookedSkills";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SkillPage from "./pages/SkillPage";
import Profile from "./pages/Profile";  // <-- Added Profile page
import Error404 from "./pages/Error404";

// Optional Firebase email-link routes
import LoginEmailLink from "./pages/LoginEmailLink";
import FinishSignIn from "./pages/FinishSignIn";
import Skills from "./pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/booked-skills", element: <BookedSkills /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/skills", element: <Skills /> },
      { path: "/profile", element: <Profile /> },  // <-- Added route
      { path: "/login-email-link", element: <LoginEmailLink /> },
      { path: "/finishSignIn", element: <FinishSignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
