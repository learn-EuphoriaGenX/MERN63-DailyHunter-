import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

let headers = ["ID", "Task Name", "Task Priority", "Added", "Time", "Status"];

const tasks = [
    {
        ID: 1,
        "Task Name": "Design Dashboard UI",
        "Task Priority": "High",
        added: "1:00 PM",
        Time: "2h",
        Status: "Resolved"
    },
    {
        ID: 2,
        "Task Name": "Fix Login Bug",
        "Task Priority": "Critical",
        added: "2:00 PM",
        Time: "1h",
        Status: "Resolved"
    },
    {
        ID: 3,
        "Task Name": "Write API Documentation",
        "Task Priority": "Medium",
        added: "5:00 PM",
        Time: "3h",
        Status: "Resolved"
    },
    {
        ID: 4,
        "Task Name": "Database Backup",
        "Task Priority": "Low",
        added: "7:00 PM",
        Time: "30m",
        Status: "Resolved"
    },
    {
        ID: 5,
        "Task Name": "Setup CI/CD Pipeline",
        "Task Priority": "High",
        added: "9:00 PM",
        Time: "4h",
        Status: "Resolved"
    },
    {
        ID: 6,
        "Task Name": "Optimize Images",
        "Task Priority": "Low",
        added: "1:00 PM",
        Time: "45m",
        Status: "Resolved"
    },
];

function ResolvedTask({ user, setUser }) {
    const navigate = useNavigate()

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
                                            {item.ID}
                                        </th>
                                        <td className="px-6 py-4">{item["Task Name"]}</td>
                                        <td className="px-6 py-4">{item["Task Priority"]}</td>
                                        <td className="px-6 py-4">{item.added}</td>
                                        <td className="px-6 py-4">{item.Time}</td>
                                        <td className="px-6 py-4">{item.Status}</td>

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