export default function MaintenanceCard({ card }) {
  return (
    <div
      className={`rounded-xl p-4 shadow border
      ${
        card.resolved
          ? "bg-green-600 text-white"
          : "bg-white"
      }`}
    >
      <h3 className="font-bold">
        {card.id}
      </h3>

      <p className="mt-2">
        {card.title}
      </p>

      {card.tech && (
        <p className="text-sm mt-2">
          {card.tech}
        </p>
      )}
    </div>
  );
}