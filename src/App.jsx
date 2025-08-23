import React from 'react'
import SubscripTtion from './pages/Subscription'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import SIdebar from './components/SIdebar'

import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddTask from './pages/AddTask'
import ResolvedTask from './pages/ResolvedTask'
import Settings from './pages/Settings'

function App() {
  return (
    <>
      <Navbar />
      <SIdebar />
      <div className="sm:ml-64">
        <div className="">
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/subscription' element={<SubscripTtion />} />
            <Route path='/add-task' element={<AddTask />} />
            <Route path='/resolved-task' element={<ResolvedTask />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>



    </>
  )
}

export default App