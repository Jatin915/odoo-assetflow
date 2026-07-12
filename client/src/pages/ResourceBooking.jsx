import Sidebar from "../components/Sidebar";
import ResourceSelector from "../components/ResourceSelector";
import BookingTimeline from "../components/BookingTimeline";
import BookSlotButton from "../components/BookSlotButton";

export default function ResourceBooking() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <ResourceSelector />

        <BookingTimeline />

        <BookSlotButton />

      </div>

    </div>
  );
}