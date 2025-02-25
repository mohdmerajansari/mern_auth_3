import React from "react";
import HomeNavbar from "../components/HomeNavbar";

function About() {
  return (
    <div className="h-screen flex flex-col">
      <HomeNavbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Hey ! I'm Mohd Meraj Ansari. I born and brought up in Balrampur
              district of Uttar Pradesh Domicile, in India. I have completed my
              schooling from my hometown and I earned the graduation degree from
              Faizabad University's affiliated college MLK PG college,
              Balrampur. I have 4 year and 9 months work experience as a Data
              Entry Operator in Abdullah Al-othaim Markets, Saudi Arabia.
              Currently I'm enrolled in a Online Bootcamp for full stack web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
