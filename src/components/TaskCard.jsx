// Utility functions
const getPriorityBorder = (priority) => {
  switch(priority) {
    case "Critical": return "border-red-500";
    case "High": return "border-orange-500";
    case "Medium": return "border-yellow-500";
    case "Low": return "border-green-500";
    default: return "border-gray-500";
  }
};

const getPriorityBackground = (priority) => {
  switch(priority) {
    case "Critical": return "bg-red-500/20";
    case "High": return "bg-orange-500/20";
    case "Medium": return "bg-yellow-500/20";
    case "Low": return "bg-green-500/20";
    default: return "bg-gray-500/20";
  }
};

const getPriorityText = (priority) => {
  switch(priority) {
    case "Critical": return "text-red-400";
    case "High": return "text-orange-400";
    case "Medium": return "text-yellow-400";
    case "Low": return "text-green-400";
    default: return "text-gray-400";
  }
};

const getStatusColor = (status) => {
  switch(status) {
    case "In Progress": return "bg-blue-500";
    case "Pending": return "bg-yellow-500";
    case "Completed": return "bg-green-500";
    default: return "bg-gray-500";
  }
};

const getStatusTextColor = (status) => {
  switch(status) {
    case "In Progress": return "text-blue-400";
    case "Pending": return "text-yellow-400";
    case "Completed": return "text-green-400";
    default: return "text-gray-400";
  }
};

const TaskCard = ({ task }) => (
  <div 
    className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border-l-4 ${getPriorityBorder(task.priority)} shadow-lg hover:shadow-xl transition-all duration-300 group`}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
        {task.name}
      </h3>
      <span className={`px-2 py-1 ${getPriorityBackground(task.priority)} ${getPriorityText(task.priority)} text-xs font-medium rounded-full uppercase tracking-wide`}>
        {task.priority}
      </span>
    </div>

    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
      <div className="flex items-center">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Added: {task.added}</span>
      </div>
      <div className="flex items-center">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          ></path>
        </svg>
        <span>Time: {task.time}</span>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`w-2 h-2 rounded-full mr-2 ${task.status !== "Completed" ? "animate-pulse" : ""} ${getStatusColor(task.status)}`}></div>
        <span className={`text-sm font-medium ${getStatusTextColor(task.status)}`}>
          {task.status}
        </span>
      </div>
      <div className="flex space-x-2">
        <button className="text-gray-400 hover:text-blue-400 transition-colors p-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        </button>
        <button className="text-gray-400 hover:text-red-400 transition-colors p-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default TaskCard