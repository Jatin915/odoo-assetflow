import Sidebar from "../components/Sidebar";
import AssetSelect from "../components/AssetSelect";
import TransferAlert from "../components/TransferAlert";
import TransferForm from "../components/TransferForm";
import AllocationHistory from "../components/AllocationHistory";

export default function AllocationTransfer() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">

        <AssetSelect />

        <TransferAlert />

        <TransferForm />

        <AllocationHistory />

      </div>
    </div>
  );
}