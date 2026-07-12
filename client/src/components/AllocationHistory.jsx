const history = [
  "Mar 12 - Allocated to Priya Shah - Engineering",
  "Jan 04 - Returned by Arjun Nair - Condition: Good",
];

export default function AllocationHistory() {
  return (
    <div className="bg-white shadow rounded-xl p-6 mt-8">

      <h2 className="text-xl font-semibold mb-4">
        Allocation History
      </h2>

      <ul className="space-y-3">

        {history.map((item, index) => (
          <li
            key={index}
            className="border-b pb-2"
          >
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}