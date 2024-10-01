import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white p-6 rounded h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome to the Home Page
      </h1>
      <div className="text-center mb-8">
        <p className="text-lg mb-4 text-gray-700">
          Manage your products, users, and orders with ease.
        </p>
        <p className="text-gray-600">
          Select an option from the menu on the left to get started.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin" className="bg-blue-500 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p>View and manage your product inventory.</p>
        </Link>
        <Link href="/admin" className="bg-green-500 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p>Manage user accounts and permissions.</p>
        </Link>
        <Link href="/admin" className="bg-yellow-500 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p>Track and process customer orders.</p>
        </Link>
      </div>
    </div>
  );
}
