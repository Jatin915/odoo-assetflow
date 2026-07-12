export default function ResourceSelector() {
  return (
    <div className="mb-8">

      <label className="block font-semibold mb-2">
        Resource
      </label>

      <input
        type="text"
        value="Conference Room B2 - Tue, 7 Jul"
        readOnly
        className="w-full border rounded-xl p-3 bg-white"
      />

    </div>
  );
}