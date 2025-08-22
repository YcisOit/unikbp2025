"use client";

export default function Sidebar() {
  const onLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/admin/login";
    } catch {}
  };

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold">Admin Menu</h2>
      <ul className="mt-4">
        <li><a href="/admin" className="block py-2">Dashboard</a></li>
        <li><a href="/admin/users" className="block py-2"> Document Verification </a></li>
        <li><a href="/admin/products" className="block py-2">Products</a></li>
      </ul>
      <button onClick={onLogout} className="mt-6 bg-blue-600 px-3 py-2 rounded">Logout</button>
    </aside>
  );
}


