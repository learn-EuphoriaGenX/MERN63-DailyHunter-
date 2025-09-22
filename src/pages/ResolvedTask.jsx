import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import BACKENDURL from '../config/backend';

let headers = ["ID", "Task Name", "Task Priority", "Added", "Time", "Status"];


function ResolvedTask({ user, setUser }) {
    const navigate = useNavigate()
    let [tasks, setTasks] = useState([])

    let retriveAllTasks = async () => {
        try {
            let token = localStorage.getItem('token')
            let response = await axios.get(`${BACKENDURL}/api/task/view?status=Completed`, {
                headers: {
                    Authorization: token,
                },
            })
            console.log(response.data.data);
            
            setTasks(response.data.data);
        } catch (error) {
            toast.error("Failed to fetch Tasks")
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
                    Your Previous Resolved Tasks.
                </h1>
                <p className="text-lg text-gray-400">
                    Congratilations You Resolved All Tasks.
                </p>
            </div>

            {/* Scrollable Table */}
            <div className="mt-9 w-full max-w-6xl bg-gray-900 rounded-lg  shadow-lg">
                <div className="overflow-y-auto max-h-96 rounded-lg">
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
                                            {index+1}
                                        </th>
                                        <td className="px-6 py-4">{item.title}</td>
                                        <td className="px-6 py-4">{item.priority}</td>
                                        <td className="px-6 py-4">{item.createdAt}</td>
                    <td className="px-6 py-4">{item.time}</td>
                    <td className={`px-6 py-4 ${item.status == "Pending" ? 'text-red-600' : item.status == "In Progress" ? 'text-amber-300' : 'text-green-500'}`}>{item.status}</td>

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
    )
}

export default ResolvedTask