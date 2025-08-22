"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const getFilenameFromPath = (p) => {
    if (!p || typeof p !== "string") return "";
    try {
      const decoded = decodeURIComponent(p);
      return decoded.replace(/^.*[\\\/]/, "");
    } catch {
      return p.replace(/^.*[\\\/]/, "");
    }
  };

  const openPreview = (filePath) => {
    if (!filePath) return;
    const filename = getFilenameFromPath(filePath);
    if (!filename) return;
    setPreviewUrl(`/api/files/${filename}`);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setPreviewUrl("");
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/admin/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">Document Verification Submissions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-[1200px] border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Student Name</th>
              <th className="border px-2 py-1">PRN No</th>
              <th className="border px-2 py-1">ABC ID</th>
              <th className="border px-2 py-1">University</th>
              <th className="border px-2 py-1">College</th>
              <th className="border px-2 py-1">Education Level</th>
              <th className="border px-2 py-1">Programme</th>
              <th className="border px-2 py-1">Specialization</th>
              <th className="border px-2 py-1">Duration</th>
              <th className="border px-2 py-1">Grade %</th>
              <th className="border px-2 py-1">Year</th>
              <th className="border px-2 py-1">Remarks</th>
              <th className="border px-2 py-1">Agency Name</th>
              <th className="border px-2 py-1">Agency Email</th>
              <th className="border px-2 py-1">Agency Contact</th>
              <th className="border px-2 py-1">Reason</th>
              <th className="border px-2 py-1">Marksheet</th>
              <th className="border px-2 py-1">Certificate</th>
              <th className="border px-2 py-1">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-100">
                  <td className="border px-2 py-1">{u.id}</td>
                  <td className="border px-2 py-1">{u.student_name}</td>
                  <td className="border px-2 py-1">{u.prn_no}</td>
                  <td className="border px-2 py-1">{u.abc_id}</td>
                  <td className="border px-2 py-1">{u.university_name}</td>
                  <td className="border px-2 py-1">{u.college_name}</td>
                  <td className="border px-2 py-1">{u.education_level}</td>
                  <td className="border px-2 py-1">{u.programme_name}</td>
                  <td className="border px-2 py-1">{u.specialization}</td>
                  <td className="border px-2 py-1">{u.duration}</td>
                  <td className="border px-2 py-1">{u.grade_percentage}</td>
                  <td className="border px-2 py-1">{u.year_of_passing}</td>
                  <td className="border px-2 py-1">{u.remarks}</td>
                  <td className="border px-2 py-1">{u.verifying_agency_name}</td>
                  <td className="border px-2 py-1">{u.verifying_agency_email}</td>
                  <td className="border px-2 py-1">{u.verifying_agency_contact}</td>
                  <td className="border px-2 py-1">{u.verification_reason}</td>
                  <td className="border px-2 py-1">
  {u.marksheet_pdf ? (
    <button
      onClick={() => openPreview(u.marksheet_pdf)}
      className="text-blue-600 underline"
    >
      View
    </button>
  ) : "N/A"}
</td>

<td className="border px-2 py-1">
  {u.certificate_pdf ? (
    <button
      onClick={() => openPreview(u.certificate_pdf)}
      className="text-blue-600 underline"
    >
      View
    </button>
  ) : "N/A"}
</td>

                  <td className="border px-2 py-1">{new Date(u.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="20" className="text-center py-4">No submissions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[95vw] max-w-5xl rounded shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h2 className="font-semibold">Document Preview</h2>
              <button className="text-red-600" onClick={closePreview}>Close</button>
            </div>
            <div className="w-full h-[80vh]">
              {previewUrl ? (
                <iframe src={previewUrl} className="w-full h-full" title="PDF Preview" />
              ) : (
                <div className="p-4">No preview available.</div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
