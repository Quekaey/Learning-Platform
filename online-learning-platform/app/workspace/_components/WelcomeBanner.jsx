import React from "react";

function WelcomeBanner() {
  return (
    <div className="p-5 bg-gradient-to-br from-blue-600 vai-indigo-600 to-pink-500 rounded-xl">
      <h2 className="font-bold text-2xl text-white">
        {" "}
        Welcome to Online Learning Platform{" "}
      </h2>
      <p className="text-white">
        Explore courses, track your progress, and connect with peers.
      </p>
    </div>
  );
}

export default WelcomeBanner;
