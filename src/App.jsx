import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
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

// --------------------------------------
// Loader Component
// --------------------------------------
const LoaderScreen = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#DFFBF6] fixed top-0 left-0 z-50">
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 border-4 border-[#C5CBC8] border-t-[#009689] rounded-full animate-spin"></div>
      <p className="mt-6 text-5xl font-semibold text-[#009689] animate-pulse">
        Loading...
      </p>
    </div>
  </div>
);

// --------------------------------------
// Layout Component
// --------------------------------------
const Layout = () => {
  const [loading, setLoading] = useState(false);

  // Hook to track navigation
  const navigation = useNavigation?.(); // if using router hooks
  // OR useEffect with window event listener (fallback)

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart); // page refresh
    return () => window.removeEventListener("beforeunload", handleStart);
  }, []);

  return (
    <>
      {loading && <LoaderScreen />}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

// --------------------------------------
// Router Setup
// --------------------------------------
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

// --------------------------------------
// MAIN APP
// --------------------------------------
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader duration for initial load
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoaderScreen />;

  return <RouterProvider router={router} />;
}
