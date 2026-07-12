import Sidebar from "../components/Sidebar";
import KanbanColumn from "../components/KanbanColumn";

const pending = [
  {
    id: "AF-0062",
    title: "Projector bulb not turning on",
  },
];

const approved = [
  {
    id: "AF-003",
    title: "AC Unit noisy compressor",
  },
];

const assigned = [
  {
    id: "AF-0078",
    title: "Forklift",
    tech: "R Varma",
  },
];

const progress = [
  {
    id: "AF-897",
    title: "Printer Jam",
    tech: "Parts Ordered",
  },
];

const resolved = [
  {
    id: "AF-873",
    title: "Chair Repair",
    tech: "Resolved 7 Jul",
    resolved: true,
  },
];

export default function Maintenance() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8 overflow-x-auto">

        <div className="grid grid-cols-5 gap-6">

          <KanbanColumn title="Pending" cards={pending} />

          <KanbanColumn title="Approved" cards={approved} />

          <KanbanColumn title="Technician Assigned" cards={assigned} />

          <KanbanColumn title="In Progress" cards={progress} />

          <KanbanColumn title="Resolved" cards={resolved} />

        </div>

      </div>
    </div>
  );
}