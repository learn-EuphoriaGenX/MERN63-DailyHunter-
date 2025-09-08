import React from "react";
import { Link } from "react-router-dom";

function HomePage({ user, setUser }) {
  return (
    <>
      <div class="min-h-screen flex flex-col items-center pt-20 sm:p-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black px-6 py-12 justify-center gap-6">
        <h1 class="text-5xl sm:mt-15 md:text-9xl font-bold text-white mb-4 tracking-tight">
          DAILY<span class="text-orange-500"> ⚒️ HUNTER</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Your daily source for trending news, deals, and opportunities
        </p>
        <div class="flex flex-col mx-auto sm:flex-row gap-4">

          {
            Object.keys(user).length <= 0 ?
              <Link to="/login">
                <button class="border border-gray-600 hover:border-orange-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Login
                </button>
              </Link> :
              <Link to="/dashboard">
                <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Dashbord
                </button>
              </Link>

          }
        </div>
      </div>
    </>
  );
}

export default HomePage;
