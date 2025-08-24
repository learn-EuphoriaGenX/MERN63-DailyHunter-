import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SIdebar from "./components/SIdebar";

import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard";
import SubscripTtion from "./pages/Subscription";
import AddTask from "./pages/AddTask";
import ResolvedTask from "./pages/ResolvedTask";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Navbar />
      <SIdebar />
      <div className="sm:ml-64">
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subscription" element={<SubscripTtion />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/resolved-task" element={<ResolvedTask />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
