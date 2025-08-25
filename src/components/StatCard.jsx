function StatCard({ title, value, icon, iconBg, iconColor }) {
  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-white/15">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
      </div>
      <div className={`${iconBg} flex p-5 rounded-lg`}>
        <i className={`${icon} ${iconColor}`}></i>
      </div>
    </div>
  </div>
  )
}
export default StatCard