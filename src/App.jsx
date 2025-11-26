// src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./component/comman/Navbar";
import Footer from "./component/comman/Footer";

// Import pages
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

// ✅ Define router with nested routes
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

// ✅ App component provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;