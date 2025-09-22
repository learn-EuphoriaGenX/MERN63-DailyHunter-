import React from "react";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import BACKENDURL from "../config/backend";

const TaskGrid = ({ tasks, retriveAllTasks }) => (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {tasks.map((task) => (
         <TaskCard key={task.id} task={task} retriveAllTasks={retriveAllTasks} />
      ))}
   </div>
);

const StatsSection = ({ tasks }) => {
   const completedTasks = tasks.filter(task => task.status === "Completed").length;
   const inProgressTasks = tasks.filter(task => task.status === "In Progress").length;
   const pendingTasks = tasks.filter(task => task.status === "Pending").length;

   let data = [
      { title: "Active Tasks", value: tasks.length, icon: "fas fa-tasks", iconBg: "bg-orange-500/20", iconColor: "text-orange-500" },
      { title: "Completed", value: completedTasks, icon: "fas fa-check-circle", iconBg: "bg-green-500/20", iconColor: "text-green-500" },
      { title: "In Progress", value: inProgressTasks, icon: "fa-solid fa-bars-progress", iconBg: "bg-blue-500/20", iconColor: "text-blue-500" },
      { title: "Pending", value: pendingTasks, icon: "fa-solid fa-clock ", iconBg: "bg-red-500/20", iconColor: "text-red-500" },
   ]

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {data.map((item, index) => (
            <StatCard
               key={index}
               title={item.title}
               value={item.value}
               icon={item.icon}
               iconBg={item.iconBg}
               iconColor={item.iconColor}
            />
         ))}
      </div>
   );
};

const Header = () => (
   <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">My Tasks</h2>
      <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-sm transition">
         <Link to="/add-task"><i className="fas fa-plus mr-2"></i> New Task</Link>
      </button>
   </div>
);

// Main Dashboard Component
const Dashboard = ({ user, setUser }) => {
   const navigate = useNavigate()

   useEffect(() => {
      if (!user || Object.keys(user).length === 0) {
         navigate("/login");
      }
   }, [user, navigate]);

   let [tasks, setTasks] = useState([])

   let retriveAllTasks = async () => {
      try {
         let token = localStorage.getItem('token')
         let response = await axios.get(`${BACKENDURL}/api/task/view`, {
            headers: {
               Authorization: token,
            },
         })
         setTasks(response.data.data);
      } catch (error) {
         toast.error("Failed to fetch Tasks")
      }
   }

   useEffect(() => {
      retriveAllTasks()
   }, [])




   return (
      <div className="text-gray-200 min-h-screen flex flex-col items-center pt-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black px-6 py-12">
         <div className="container mx-auto px-4 py-8">
            <main className="space-y-6">
               <StatsSection tasks={tasks} />

               <div className="bg-gray-800 rounded-xl p-6">
                  <Header />
                  <TaskGrid tasks={tasks} retriveAllTasks={retriveAllTasks} />
               </div>
            </main>
         </div>
      </div>
   );
};

export default Dashboard;