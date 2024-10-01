import DashboardLayout from "./components/Layout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Admin Dashboard
        </h1>
        <p>This is the content area. Customize this based on your needs.</p>
      </div>
    </DashboardLayout>
  );
}
