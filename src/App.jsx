import React from 'react'
import SubscripTtion from './pages/Subscription'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import SIdebar from './components/SIdebar'

function App() {
  return (
    <>

      <Navbar />
      <SIdebar />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <SubscripTtion />
        </div>
      </div>





    </>
  )
}

export default App