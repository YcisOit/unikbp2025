"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";

export default function AddNotice() {
  const [formData, setFormData] = useState({
    type: "university",
    title: "",
    href: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("type", formData.type);
    data.append("title", formData.title);
    data.append("href", formData.href);
    if (formData.file) {
      data.append("file", formData.file);
    }

    const res = await fetch("/admin/api/notices", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      Swal.fire({
        title: "Success!",
        text: "Notice added successfully!",
        icon: "success",
        confirmButtonColor: "#000", // black button
      });
      setFormData({ type: "university", title: "", href: "", file: null });
      e.target.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while adding the notice.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Add Notice</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Notice Type */}
            <div>
              <label className="block font-semibold">Notice Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="university">University</option>
                <option value="college">College</option>
              </select>
            </div>

            {/* Notice Title */}
            <div>
              <label className="block font-semibold">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            {/* Notice Link */}
            <div>
              <label className="block font-semibold">Notice Link</label>
              <input
                type="url"
                name="href"
                value={formData.href}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full border p-2 rounded"
              />
            </div>

            {/* PDF Upload */}
            <div>
              <label className="block font-semibold">Upload PDF</label>
              <input
                type="file"
                name="file"
                accept="application/pdf"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-yellow-500"
            >
              Add Notice
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
