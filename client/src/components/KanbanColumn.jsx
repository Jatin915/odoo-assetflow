import MaintenanceCard from "./MaintenanceCard";

export default function KanbanColumn({ title, cards }) {
  return (
    <div>

      <h2 className="font-bold text-lg mb-4">
        {title}
      </h2>

      <div className="space-y-4">

        {cards.map((card, index) => (
          <MaintenanceCard
            key={index}
            card={card}
          />
        ))}

      </div>

    </div>
  );
}