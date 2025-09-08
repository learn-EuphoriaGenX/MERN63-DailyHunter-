import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import { useState } from "react";
import axios from "axios";
import BACKENDURL from "./config/backend";
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {

  let [user, setUser] = useState({})
  const location = useLocation()

  const handleRefresher = async () => {

    let token = localStorage.getItem('token')
    try {
      let response = await axios.get(`${BACKENDURL}/api/users/profile`, {
        headers: {
          Authorization: token ? token : ''
        }
      })
      console.log(response);
      if (response.data.success) {
        setUser(response.data.data)
        localStorage.setItem('token', response.data.token)
      }
    } catch (error) {
      setUser({})
      localStorage.removeItem('token')
      // toast.error(error.response.data.message || error.message, { position: "top-right", backgroundColor: "red", theme: "colored" })
    }
  }

  useEffect(() => {
    if (location.pathname !== '/login' && location.pathname !== '/register') {
      handleRefresher()
    }
  }, [])



  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <SIdebar user={user} setUser={setUser} />
      <div className="sm:ml-64">
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
            <Route path="/subscription" element={<SubscripTtion user={user} setUser={setUser} />} />
            <Route path="/add-task" element={<AddTask user={user} setUser={setUser} />} />
            <Route path="/resolved-task" element={<ResolvedTask user={user} setUser={setUser} />} />
            <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/register" element={<Register user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
