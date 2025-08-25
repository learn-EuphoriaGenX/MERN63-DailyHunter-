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
export { getPriorityBorder, getPriorityBackground, getPriorityText, getStatusColor, getStatusTextColor };