// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import "./App.css";

// Components
import Navbar from "./component/comman/Navbar";
import Footer from "./component/comman/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./component/comman/Login";
import SignUp from "./component/comman/SignUp";
import Cart from "./redux/slices/Cart";

// ✅ Layout component (Navbar + Footer always visible)
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// --------------------------------------------------------
// Router
// --------------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

// --------------------------------------------------------
// MAIN APP — Loader First
// --------------------------------------------------------
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // 3 sec loader
  }, []);

  // if (loading) return <LoaderScreen />;

  return <RouterProvider router={router} />;
}
