"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";

export default function ManageNews() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("university"); // default tab

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("/admin/api/getNotices");
        const data = await res.json();
        setNotices(data);
      } catch (err) {
        console.error("Error fetching notices:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  // Delete Handler with SweetAlert
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This news will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/admin/api/deleteNotice?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          // Remove deleted news from UI
          setNotices((prev) => prev.filter((notice) => notice.id !== id));

          Swal.fire("Deleted!", "The news has been deleted.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete news.", "error");
        }
      } catch (err) {
        console.error("Error deleting notice:", err);
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  // Filter notices based on active tab
  const filteredNotices = notices.filter(
    (notice) => notice.type === activeTab
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Manage News</h2>

        {/* Tabs */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab("university")}
            className={`px-4 py-2 rounded ${
              activeTab === "university"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            University
          </button>
          <button
            onClick={() => setActiveTab("college")}
            className={`px-4 py-2 rounded ${
              activeTab === "college"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            College
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : filteredNotices.length === 0 ? (
          <p>No {activeTab} news found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-3 py-2">Sr. No.</th>
                  <th className="border border-gray-300 px-3 py-2">Title</th>
                  <th className="border border-gray-300 px-3 py-2">Link/PDF</th>
                  <th className="border border-gray-300 px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotices.map((notice, index) => (
                  <tr key={notice.id} className="hover:bg-gray-50">
                    {/* Sr. No. */}
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {notice.title}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {notice.href ? (
                        <a
                          href={notice.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    {/* Delete Button */}
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      <button
                        onClick={() => handleDelete(notice.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
