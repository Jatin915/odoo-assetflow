const ReportsSummary = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-10">

      <div>

        <h2 className="text-3xl font-bold mb-4">
          Most used assets
        </h2>

        <div className="space-y-3 text-lg">

          <p>Room B2 : 34 bookings this month</p>

          <p>Van AF-343 : 21 trips this month</p>

          <p>Projector AF-335 : 18 uses</p>

        </div>

      </div>

      <div>

        <h2 className="text-3xl font-bold mb-4">
          Idle assets
        </h2>

        <div className="space-y-3 text-lg">

          <p>Camera AF-301 : unused 60+ days</p>

          <p>Chair AF-002 : unused 45 days</p>

        </div>

      </div>

    </div>
  );
};

export default ReportsSummary;