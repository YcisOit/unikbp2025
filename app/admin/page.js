import Sidebar from "./components/Sidebar";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome, Admin!</p>
      </main>
    </div>
  );
}
