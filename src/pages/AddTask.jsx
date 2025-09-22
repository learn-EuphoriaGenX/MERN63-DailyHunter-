import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import BACKENDURL from "../config/backend";
import { useEffect } from "react";
import axios from "axios";

let headers = ["ID", "Task Name", "Task Priority", "Added", "Time", "Status", "Action"];



function AddTask({ user, setUser }) {
  const navigate = useNavigate()
  let [tasks, setTasks] = useState([])

  let emptyTask = {
    title: "",
    time: "",
    priority: ""
  }

  let [newTask, setNewTask] = useState(emptyTask)

  // http://localhost:3000/api/task/add

  // http://localhost:3000/api/task/view

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

  let handleUpdate = async (id, status) => {
    try {
      let token = localStorage.getItem('token')
      console.log(token);

      let response = await axios.put(`${BACKENDURL}/api/task/update/${id}/${status}`, {}, {
        headers: {
          Authorization: token,
        },
      })
      toast.success("Task Updated Successfully!")
      retriveAllTasks()
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message)
    }
  }



  let handleClickAddTask = async () => {
    if (!newTask.title || !newTask.time || !newTask.priority) {
      console.log("Hello");

      toast.error('Please fill all the Fields!')
      return
    } else {
      try {
        let token = localStorage.getItem('token')
        let response = await axios.post(`${BACKENDURL}/api/task/add`, newTask, {
          headers: {
            Authorization: token,
          },
        })
        retriveAllTasks();
        toast.success("Task Added Successfully!")
      } catch (error) {
        toast.error("Failed to fetch Tasks")

      }

    }
  }

  useEffect(() => {
    retriveAllTasks()
  }, [])



  if (Object.keys(user).length <= 0) {
    return navigate('/login')
  }
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black px-6 py-12">
      {/* Header */}
      <div className="mb-5 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Create Task To Make Future.
        </h1>
        <p className="text-lg text-gray-400">
          Unlock productivity with the right Task
        </p>
      </div>

      {/* Task Input */}
      <div className="flex items-end justify-center gap-2">
        <div>
          <label
            htmlFor="task"
            className="block mb-1 text-sm font-medium text-gray-200"
          >
            Task Title
          </label>
          <input
            type="text"
            id="task"
            name="title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            placeholder="Coding"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="task"
            className="block mb-1 text-sm font-medium text-gray-200"
          >
            Task Time
          </label>
          <input
            type="text"
            id="task"
            name="time"
            value={newTask.time}
            onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
            placeholder="4h"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="priority"
            className="block mb-1 text-sm font-medium text-gray-200"
          >
            Task Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            className="w-[110%] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <Button handleClick={handleClickAddTask} text="Add Task" design={"ml-5"} />
      </div>

      {/* Scrollable Table */}
      <div className="mt-9 w-full max-w-6xl bg-gray-900 rounded-lg  shadow-lg">
        <div className="overflow-y-auto max-h-84 rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="sticky top-0 bg-gray-700 text-gray-300 uppercase text-xs">
              <tr>
                {headers.map((item, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {tasks.length > 0 ? (
                tasks.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-gray-800 even:bg-gray-700 border-b border-gray-600 hover:bg-gray-600 transition"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white whitespace-nowrap"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">{item.priority}</td>
                    <td className="px-6 py-4">{item.createdAt}</td>
                    <td className="px-6 py-4">{item.time}</td>
                    <td className={`px-6 py-4 ${item.status == "Pending" ? 'text-red-600' : item.status == "In Progress" ? 'text-amber-300' : 'text-green-500'}`}>{item.status}</td>
                    <td className="px-6 py-4">
                      {
                        item.status == 'Pending' ? <button
                          className="font-medium text-blue-400 hover:underline"
                          onClick={() => handleUpdate(item._id, 'In Progress')}
                        >
                          Mark As In Progress
                        </button> :
                          item.status == "In Progress" ?
                            <button
                              onClick={() => handleUpdate(item._id, 'Completed')}
                              className="font-medium text-blue-400 hover:underline"
                            >
                              Mark As Completed
                            </button> :
                            <button
                              className="font-medium text-blue-400 hover:underline"
                            >
                              Completed
                            </button>
                      }
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="text-center py-6 text-gray-400"
                  >
                    No Task For Today
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
