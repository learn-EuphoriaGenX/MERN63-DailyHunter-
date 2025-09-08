import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

let headers = ["ID", "Task Name", "Task Priority", "Added", "Time", "Status", "Action"];

const tasks = [
  {
    ID: 1,
    "Task Name": "Design Dashboard UI",
    "Task Priority": "High",
    added: "1:00 PM",
    Time: "2h",
    Status: "In Progress",
    Action: "Resolved",
  },
  {
    ID: 2,
    "Task Name": "Fix Login Bug",
    "Task Priority": "Critical",
    added: "2:00 PM",
    Time: "1h",
    Status: "Pending",
    Action: "In Progress",
  },
  {
    ID: 3,
    "Task Name": "Write API Documentation",
    "Task Priority": "Medium",
    added: "5:00 PM",
    Time: "3h",
    Status: "Completed",
    Action: "None",
  },
  {
    ID: 4,
    "Task Name": "Database Backup",
    "Task Priority": "Low",
    added: "7:00 PM",
    Time: "30m",
    Status: "Completed",
    Action: "None",
  },
  {
    ID: 5,
    "Task Name": "Setup CI/CD Pipeline",
    "Task Priority": "High",
    added: "9:00 PM",
    Time: "4h",
    Status: "In Progress",
    Action: "Resolved",
  },
  {
    ID: 6,
    "Task Name": "Optimize Images",
    "Task Priority": "Low",
    added: "1:00 PM",
    Time: "45m",
    Status: "Completed",
    Action: "None",
  },
];

function AddTask({ user, setUser }) {
  const navigate = useNavigate()

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
            Task Name
          </label>
          <input
            type="text"
            id="task"
            placeholder="Coding"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <Button text="Add Task" />
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
                      {item.ID}
                    </th>
                    <td className="px-6 py-4">{item["Task Name"]}</td>
                    <td className="px-6 py-4">{item["Task Priority"]}</td>
                    <td className="px-6 py-4">{item.added}</td>
                    <td className="px-6 py-4">{item.Time}</td>
                    <td className="px-6 py-4">{item.Status}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-400 hover:underline"
                      >
                        {item.Action}
                      </a>
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
