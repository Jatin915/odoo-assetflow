const ActionButtons = () => {
  return (
    <div className="flex gap-4 mt-8">

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Register Asset
      </button>

      <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
        Book Resource
      </button>

      <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
        Raise Request
      </button>

    </div>
  );
};

export default ActionButtons;