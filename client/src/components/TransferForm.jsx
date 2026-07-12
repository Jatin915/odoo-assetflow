export default function TransferForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-6">
        Transfer Request
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label>From</label>

          <input
            value="Priya Shah"
            readOnly
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label>To</label>

          <select className="w-full border rounded-lg p-3 mt-2">
            <option>Select Employee</option>
            <option>Rahul Sharma</option>
            <option>Rohan Mehta</option>
          </select>
        </div>

      </div>

      <div className="mt-6">

        <label>Reason</label>

        <textarea
          rows="6"
          placeholder="Enter reason..."
          className="w-full border rounded-xl p-4 mt-2"
        />

      </div>

      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
        Submit Request
      </button>

    </div>
  );
}