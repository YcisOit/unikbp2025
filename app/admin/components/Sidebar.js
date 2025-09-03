"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight, Home, FileText, Users, LogOut, Newspaper } from "lucide-react";

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const onLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/admin/login";
    } catch {}
  };

  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-200 flex flex-col shadow-lg">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-[#93135C]">Admin Panel</h2>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <a
          href="/admin"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
        >
          <Home className="w-5 h-5" />
          Dashboard
        </a>

        <a
          href="/admin/users"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
        >
          <Users className="w-5 h-5" />
          Document Verification
        </a>

        {/* News Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("news")}
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
          >
            <span className="flex items-center gap-3">
              <Newspaper className="w-5 h-5" />
              News
            </span>
            {openDropdown === "news" ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          <div
            className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
              openDropdown === "news" ? "max-h-40" : "max-h-0"
            }`}
          >
            <a
              href="/admin/add-notice"
              className="block px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
            >
              ➕ Add News
            </a>
            <a
              href="/admin/managenews"
              className="block px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
            >
              📄 Manage News
            </a>
          </div>
        </div>
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
