const MaintenanceAlerts = () => {
  return (
    <div className="mt-12 border-t pt-8">

      <h2 className="text-3xl font-bold mb-5">
        Assets due for maintenance / nearing retirement
      </h2>

      <div className="space-y-4 text-lg">

        <p>
          Forklift AF-0087 : service due in 5 days
        </p>

        <p>
          Laptop AF-0020 : 4 years old : nearing retirement
        </p>

      </div>

      <button className="mt-8 bg-red-800 hover:bg-red-900 text-white px-10 py-4 rounded-xl text-lg">

        Export Report

      </button>

    </div>
  );
};

export default MaintenanceAlerts;