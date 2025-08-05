import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function AuthPage() {
  const [tab, setTab] = useState("signin");
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex bg-gradient-to-b from-[#fdf2f8] to-[#fce7f3]">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-400 to-pink-600 items-center justify-center p-8">
        <div className="text-center text-white">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to She Can Foundation</h1>
            <p className="text-xl text-pink-100 max-w-md mx-auto">
              Empowering interns to make a difference through fundraising and community impact.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-pink-100">Join our internship program</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-pink-100">Make a positive impact</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-pink-100">Build your skills and network</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-5">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-6 mt-14">
           
            <h1 className="text-3xl font-bold">Intern Portal</h1>
            <div className="text-gray-500 text-center mt-2 text-base">
              {tab === "signin"
                ? "Welcome back! Sign in to access your dashboard"
                : "Join our internship program today"}
            </div>
          </div>

          <div className="flex rounded-xl bg-white shadow-md mb-7">
            <button
              className={`flex-1 px-4 py-2 font-semibold text-lg rounded-xl transition-colors ${
                tab === "signin"
                  ? "bg-white text-pink-700 shadow"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("signin")}
            >
              Sign In
            </button>
            <button
              className={`flex-1 px-4 py-2 font-semibold text-lg rounded-xl transition-colors ${
                tab === "signup"
                  ? "bg-white text-pink-700 shadow"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("signup")}
            >
              Sign Up
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            {tab === "signin" ? <SignInForm navigate={navigate} /> : <SignUpForm navigate={navigate} />}
          </div>

          <div className="my-7 text-center">
            {tab === "signin" ? (
              <span className="text-gray-500">
                Don't have an account?{" "}
                <button
                  onClick={() => setTab("signup")}
                  className="text-pink-600 hover:underline transition-colors font-medium"
                >
                  Sign up
                </button>
              </span>
            ) : (
              <span className="text-gray-500">
                Already have an account?{" "}
                <button
                  onClick={() => setTab("signin")}
                  className="text-pink-600 hover:underline transition-colors font-medium"
                >
                  Sign in
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function SignInForm({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-2">Sign in to your account</div>
      <div className="text-gray-500 text-center">Enter your credentials to access your intern dashboard</div>
      <div>
        <label className="block mb-1 font-medium">Email address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-100"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Password</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-100"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg mt-3 text-lg shadow"
      >
        Sign In
      </button>
    </form>
  );
}

function SignUpForm({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-2">Create your account</div>
      <div className="text-gray-500 text-center">Join our internship program and start making an impact</div>
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-100"
            type="text"
            required
            placeholder="Enter your full name"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Email address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-100"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Password</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-pink-100"
            type="password"
            required
            placeholder="Create a password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg mt-3 text-lg shadow"
      >
        Create Account
      </button>
    </form>
  );
}
