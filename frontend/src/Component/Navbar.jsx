import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuth = useLocation().pathname.includes("/auth");

  const menuItems = [
    !isAuth && { label: "Sign In", path: "/auth", type: "text" },
    { label: "Dashboard", path: "/dashboard", type: "text" },
    { label: "Leaderboard", path: "/leaderboard", type: "primary" },
  ].filter(Boolean);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={"logo.avif"} alt="FundRaise Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold font-cursive text-gray-800">
              She Can Foundation
            </span>
          </div>

          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`font-medium transition ${
                  item.type === "primary"
                    ? "bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
                    : "text-gray-800 hover:text-pink-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-pink-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white/70 backdrop-blur-lg shadow-lg rounded-b-2xl">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={`block w-full text-left px-3 py-2 rounded-md font-medium transition ${
                item.type === "primary"
                  ? "bg-pink-500 text-white hover:bg-pink-600"
                  : "text-gray-800 hover:text-pink-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
