import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleError, handleSuccess } from "../utils";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await fetch("https://mern-auth-3-api.vercel.app/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      handleSuccess("User sign up successful");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log("Error while sending data to the server : ", error.message);
      handleError("Server side error : ", error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Create Account
            </h1>
            <p className="text-gray-500 mb-4">
              Join us today and start your journey
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
