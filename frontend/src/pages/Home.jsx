import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";

function Home() {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    setActiveUser(localStorage.getItem("LoggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("LoggedInUser");
    window.location.href = "/login";
  };
  return (
    <div className="h-screen flex flex-col">
      <HomeNavbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
          <p className="text-gray-600 mb-4">{activeUser}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
