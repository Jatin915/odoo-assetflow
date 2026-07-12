const times = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
];

export default function BookingTimeline() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      {times.map((time, index) => (
        <div key={index} className="flex mb-5">

          <div className="w-20 font-semibold text-gray-600">
            {time}
          </div>

          <div className="flex-1">

            {time === "9:00" && (
              <div className="bg-blue-600 text-white rounded-lg px-4 py-3">
                Booked - Procurement Team - 9 to 10
              </div>
            )}

            {time === "10:00" && (
              <div className="border-2 border-red-400 border-dashed rounded-lg px-4 py-3 text-red-600">
                Requested 9:30 to 10:30 - Conflict - Slot unavailable
              </div>
            )}

          </div>

        </div>
      ))}

    </div>
  );
}