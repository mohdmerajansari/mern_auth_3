import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleSuccess, handleError } from "../utils";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navitate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
   try {
      const response = await fetch("https://mern-auth-3-oh17.onrender.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data.Name);
      console.log(data.jwtToken);
      handleSuccess("User login successful");
      localStorage.setItem("Token", data.jwtToken);
      localStorage.setItem("LoggedInUser", data.Name);
      setTimeout(() => {
        navitate("/home");
      }, 2000);
    } catch (error) {
      console.log("Error while sending data to the server : ", error.message);
      handleError("Server side error : ", error.message);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Login to your account
              </h1>
            </div>
            <form className="space-y-4" onSubmit={handleLogin}>
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
                Login
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
