const ReportsCharts = () => {
  return (
    <div className="grid grid-cols-2 gap-8">

      <div className="bg-blue-900 rounded-3xl p-6 shadow-lg">

        <h2 className="text-2xl text-white font-bold mb-6">
          Utilization by Department
        </h2>

        <div className="flex items-end gap-5 h-60">

          {[60,90,110,80,60,95].map((h,i)=>(
            <div
              key={i}
              className="bg-yellow-700 rounded-t-lg w-10"
              style={{height:`${h}%`}}
            />
          ))}

        </div>

      </div>

      <div className="bg-blue-900 rounded-3xl p-6 shadow-lg">

        <h2 className="text-2xl text-white font-bold mb-6">
          Maintenance Frequency
        </h2>

        <svg width="100%" height="240">

          <polyline
            fill="none"
            stroke="#ff8f8f"
            strokeWidth="4"
            points="
            20,170
            80,120
            140,140
            200,80
            260,120
            320,50
            400,30"
          />

        </svg>

      </div>

    </div>
  );
};

export default ReportsCharts;